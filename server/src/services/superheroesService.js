import { prisma } from "../config/db.js";
import { uploadBufferToCloudinary } from "../utils/cloudinaryUpload.js";
import { safeParseJSON } from "../utils/safeParseJSON.js";

async function handleImages(files, imageUrlsArr, existingImages = []) {
  let images = imageUrlsArr
    .map((url) => String(url).trim())
    .filter(Boolean)
    .map((url) => ({ url }));

  if (files?.length) {
    for (const file of files) {
      const { secure_url } = await uploadBufferToCloudinary(
        file.buffer,
        "superheroes"
      );
      images.push({ url: secure_url });
    }
  }

  if (existingImages.length) {
    const existingUrls = new Set(existingImages.map((img) => img.url));
    images = images.filter((img) => !existingUrls.has(img.url));
  }

  return images;
}

export async function createSuperheroService(data, files) {
  const { nickname, realName, origin_description, superpowers, catchPhrase } =
    data;

  const imageUrls = safeParseJSON(data.imageUrls, []);
  const images = await handleImages(files, imageUrls);

  return prisma.superhero.create({
    data: {
      nickname,
      realName,
      origin_description,
      superpowers,
      catchPhrase,
      ...(images.length && { images: { createMany: { data: images } } }),
    },
    include: { images: { orderBy: { id: "asc" } } },
  });
}

export async function getSuperheroesService(page, take) {
  const skip = (page - 1) * take;

  const total = await prisma.superhero.count();
  const superheroes = await prisma.superhero.findMany({
    take,
    skip,
    select: {
      id: true,
      nickname: true,
      images: { take: 1, select: { url: true }, orderBy: { id: "asc" } },
    },
  });

  return {
    page,
    take,
    total,
    pages: Math.ceil(total / take),
    superheroes,
  };
}

export async function getSuperheroByIdService(id) {
  const superhero = await prisma.superhero.findUnique({
    where: { id },
    include: { images: { orderBy: { id: "asc" } } },
  });

  if (!superhero) throw new Error("Superhero not found");
  return superhero;
}

export async function updateSuperheroService(id, data, files) {
  const existingHero = await prisma.superhero.findUnique({
    where: { id },
    include: { images: true },
  });

  if (!existingHero) throw new Error("Superhero not found");

  const { nickname, realName, origin_description, superpowers, catchPhrase } =
    data || {};
  const updatedData = {
    nickname: nickname ?? existingHero.nickname,
    realName: realName ?? existingHero.realName,
    origin_description: origin_description ?? existingHero.origin_description,
    superpowers: superpowers ?? existingHero.superpowers,
    catchPhrase: catchPhrase ?? existingHero.catchPhrase,
  };

  const imagesToDelete = safeParseJSON(data.imagesToDelete, [])
    .map(Number)
    .filter((n) => Number.isFinite(n));

  if (imagesToDelete.length) {
    await prisma.image.deleteMany({
      where: { id: { in: imagesToDelete }, superheroId: id },
    });
  }

  const imageUrls = safeParseJSON(data.imageUrls, []);
  const newImages = await handleImages(files, imageUrls, existingHero.images);

  if (newImages.length) {
    updatedData.images = { createMany: { data: newImages } };
  }

  return prisma.superhero.update({
    where: { id },
    data: updatedData,
    include: { images: { orderBy: { id: "asc" } } },
  });
}

export async function deleteSuperheroService(id) {
  await prisma.superhero.delete({ where: { id } });
  return { message: "Superhero deleted" };
}

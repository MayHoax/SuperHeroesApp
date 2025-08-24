import { describe, it, expect, beforeEach, vi } from "vitest";
import { prismaMock } from "./mocks/prisma.js";
import { uploadBufferToCloudinary as mockUpload } from "./mocks/cloudinaryUpload.js";

vi.mock("../src/config/db.js", () => ({ prisma: prismaMock }));
vi.mock("../src/utils/cloudinaryUpload.js", () => ({
  uploadBufferToCloudinary: mockUpload,
}));

import * as superheroService from "../src/services/superheroesService.js";
import { prisma } from "../src/config/db.js";
import { uploadBufferToCloudinary } from "../src/utils/cloudinaryUpload.js";

describe("Superheroes Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should create superhero with images", async () => {
    const mockHero = {
      id: 1,
      nickname: "Batman",
      images: [{ url: "https://fake-cloudinary.com/fake.jpg" }],
    };
    prisma.superhero.create.mockResolvedValue(mockHero);

    const files = [{ buffer: Buffer.from("fake") }];
    const result = await superheroService.createSuperheroService(
      { nickname: "Batman" },
      files
    );

    expect(uploadBufferToCloudinary).toHaveBeenCalledTimes(1);
    expect(prisma.superhero.create).toHaveBeenCalled();
    expect(result.nickname).toBe("Batman");
    expect(result.images.length).toBe(1);
  });
});

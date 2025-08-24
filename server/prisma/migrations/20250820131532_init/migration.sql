-- CreateTable
CREATE TABLE "public"."Superhero" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "realName" TEXT NOT NULL,
    "origin_description" TEXT,
    "superpowers" TEXT,
    "catchPhrase" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Superhero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "superheroId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Superhero_nickname_key" ON "public"."Superhero"("nickname");

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_superheroId_fkey" FOREIGN KEY ("superheroId") REFERENCES "public"."Superhero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

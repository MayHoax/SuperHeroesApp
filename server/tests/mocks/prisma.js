import { vi } from "vitest";

export const prismaMock = {
  superhero: {
    create: vi.fn(),
    findUnique: vi.fn(),
    findMany: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  image: {
    deleteMany: vi.fn(),
  },
};

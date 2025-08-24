import { vi } from "vitest";

export const uploadBufferToCloudinary = vi.fn(() =>
  Promise.resolve({ secure_url: "https://fake-cloudinary.com/fake.jpg" })
);

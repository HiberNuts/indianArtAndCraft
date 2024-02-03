import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // projectId: "pz9ehg2k",
  projectId: "buop301v",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
  token: "skzHmJyFCyida5QCv7vkB0G1Nlqzil0NkydhVaGep0ZMHc8KhirhTDfWnT2l1HaAyIVHxA4lX1Q2Y0ZoItIJP0enymMOqp79mULTNaJzssFU1edz1j5yn8mb3N3Sd4NN816ps9KRi1jYpme8gL4VXeHRumV4XNOMG2BkXC2NtLibbp5eL2l5"
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

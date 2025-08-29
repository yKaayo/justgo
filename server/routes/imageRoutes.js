// Controllers
import { generateImage } from "../controllers/authController.js";

export async function image(fastify) {
  fastify.post("/", generateImage);
}

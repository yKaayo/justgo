import Fastify from "fastify";
import cors from "@fastify/cors";

// Routes
import image from "./routes/imageRoutes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: "http://localhost:8080",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

// Routes
fastify.register(image, { prefix: "/images" });

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

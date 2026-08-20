import { Hono } from "hono";
import { cors } from "hono/cors";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../router.js";
import { createContext } from "../context.js";

export const config = {
  runtime: "nodejs",
};

const app = new Hono();

app.use(
  cors({
    origin: [
      "https://pitwallai-weld.vercel.app",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    allowHeaders: ["Authorization", "Content-Type"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);

app.all("/api/trpc/*", async (c) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext,
  });
});

export default function handler(req: Request) {
  return app.fetch(req);
}

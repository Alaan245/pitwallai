import { Hono } from "hono";
import { registerWhopWebhook } from "../whop-webhook.js";

export const config = {
  runtime: "nodejs",
};

const app = new Hono();
registerWhopWebhook(app);

export default function handler(req: Request) {
  return app.fetch(req);
}

export const config = {
  runtime: "nodejs",
};

export default function handler() {
  return Response.json({ ok: true, ts: Date.now(), env: "production" });
}

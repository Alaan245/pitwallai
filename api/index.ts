export const config = {
  runtime: "nodejs",
};

export default async function handler(req: Request) {
  try {
    // Charge l'API déjà buildée par `npm run build` (esbuild).
    // @ts-ignore
    const mod = await import("../dist/boot.js");
    const app = mod.default ?? mod;
    return await app.fetch(req);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : "";
    return new Response(
      JSON.stringify({ error: message, stack }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }
}

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: Request) {
  // Charge l'API déjà buildée par `npm run build` (esbuild).
  // @ts-ignore
  const mod = await import("../dist/boot.js");
  const app = mod.default ?? mod;
  return app.fetch(req);
}

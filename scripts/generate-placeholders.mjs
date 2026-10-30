import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function lerp(a, b, t) {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t));
}

function writeJpeg(name, width, height, topHex, bottomHex) {
  const top = hexToRgb(topHex);
  const bottom = hexToRgb(bottomHex);
  const header = Buffer.from(`P6\n${width} ${height}\n255\n`);
  const body = Buffer.alloc(width * height * 3);
  let i = 0;
  for (let y = 0; y < height; y++) {
    const ty = y / (height - 1);
    for (let x = 0; x < width; x++) {
      const tx = x / (width - 1);
      const stripe = Math.sin(tx * Math.PI * 3) * 0.08;
      const color = lerp(top, bottom, Math.min(1, Math.max(0, ty + stripe)));
      body[i++] = color[0];
      body[i++] = color[1];
      body[i++] = color[2];
    }
  }
  const ppm = join(outDir, `${name}.ppm`);
  const jpg = join(outDir, `${name}.jpg`);
  writeFileSync(ppm, Buffer.concat([header, body]));
  execFileSync("sips", ["-s", "format", "jpeg", ppm, "--out", jpg], {
    stdio: "ignore",
  });
  execFileSync("rm", [ppm]);
}

const navy = "#1C1F3D";
const red = "#E5262B";
const orange = "#F58220";
const dark = "#0F1228";

writeJpeg("hero", 1920, 1080, navy, dark);
writeJpeg("service-building", 1200, 800, navy, red);
writeJpeg("service-rehab", 1200, 800, navy, orange);
writeJpeg("service-wwtp", 1200, 800, dark, navy);
writeJpeg("service-materials", 1200, 800, orange, red);
writeJpeg("project-1", 1400, 900, navy, orange);
writeJpeg("project-2", 1400, 900, navy, red);
writeJpeg("project-3", 1400, 900, dark, orange);
writeJpeg("project-4", 1400, 900, navy, "#3A4068");
writeJpeg("project-5", 1400, 900, red, orange);
writeJpeg("project-6", 1400, 900, dark, red);
writeJpeg("project-7", 1400, 900, orange, navy);
writeJpeg("project-8", 1400, 900, "#2A2E55", orange);
writeJpeg("gallery-1", 1400, 900, navy, "#4A1A1C");
writeJpeg("gallery-2", 1400, 900, dark, orange);
writeJpeg("gallery-3", 1400, 900, red, navy);
writeJpeg("about", 1400, 900, navy, "#2C2040");

console.log("Placeholder images written to public/images");

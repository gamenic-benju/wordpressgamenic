import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC = path.join(__dirname, "static");

const SCRIPT_TAG = '<script src="/js/auth.js"></script>';

const htmlFiles = fs
  .readdirSync(STATIC)
  .filter((f) => f.endsWith(".html"))
  .map((f) => path.join(STATIC, f));

let updated = 0;

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, "utf8");
  if (html.includes("auth.js")) continue;
  html = html.replace("</head>", `${SCRIPT_TAG}\n</head>`);
  fs.writeFileSync(file, html);
  updated++;
}

console.log(`Injected auth script into ${updated} HTML files.`);

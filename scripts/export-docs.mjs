// Builds the static site and copies it into /docs, which GitHub Pages serves from the main branch.
import { execSync } from "node:child_process";
import { cpSync, rmSync, writeFileSync, existsSync } from "node:fs";

execSync("npx next build", { stdio: "inherit" });
if (existsSync("docs")) rmSync("docs", { recursive: true });
cpSync("out", "docs", { recursive: true });
writeFileSync("docs/.nojekyll", "");
console.log("Static site written to docs/");

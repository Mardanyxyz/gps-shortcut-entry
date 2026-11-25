import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I sent you through the car wash with the windows down because the car needed a shower and I never promised to check the windows.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);

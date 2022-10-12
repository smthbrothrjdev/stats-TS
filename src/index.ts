import { match } from "assert";
import fs from "fs";
// 0-date,1-teamH,2-teamA,3-scoreH,4-scoreA,5-winner,6-ref
const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] == "Man United" && match[5] == "H") ||
    (match[2] == "Man United" && match[5] == "A")
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

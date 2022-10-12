"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// 0-date,1-teamH,2-teamA,3-scoreH,4-scoreA,5-winner,6-ref
const matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((row) => {
    return row.split(",");
});
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] == "Man United" && match[5] == MatchResult.HomeWin) ||
        (match[2] == "Man United" && match[5] == MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);

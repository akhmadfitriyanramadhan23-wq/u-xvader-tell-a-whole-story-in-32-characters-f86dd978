// Tell a Whole Story in 32 Characters — u-xvader-tell-a-whole-story-in-32-characters-f86dd978
// A single Wi-Fi network name, 32 characters or fewer, that lands a joke and
// implies a story. The name is the network itself telling its story: it went
// out for milk in 2019 and never came back — the absent-dad milk run, told by
// the Wi-Fi that left. Fresh, tight, and readable at a glance in a phone's
// network list.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "WiFiWentForMilkIn2019";

const points = [...line].length;
if (points < 1 || points > 32 || line.trim().length === 0) {
  throw new Error(`entry must be 1-32 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}

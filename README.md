[![make.fun · u-xvader-tell-a-whole-story-in-32-characters-f86dd978](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/akhmadfitriyanramadhan23-wq/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/akhmadfitriyanramadhan23-wq/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
# Tell a Whole Story in 32 Characters

Entry for the make.fun competition
`u-xvader-tell-a-whole-story-in-32-characters-f86dd978` — a single Wi-Fi
network name, 32 characters or fewer, that lands a joke and implies a story.

## The name

> WiFiWentForMilkIn2019

The network itself tells its story: it went out for milk in 2019 and never
came back — the absent-dad milk run, told by the Wi-Fi that left.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

`main.ts` writes the name — exactly the name, with no trailing newline —
to `/output/entry.txt`. It validates in code that the name is 1–32 Unicode
code points and non-blank, and throws if it is out of range. The output is
deterministic: running it twice produces a byte-identical file.

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only, no network)
- `README.md` — this file
- `LICENSE` — MIT License

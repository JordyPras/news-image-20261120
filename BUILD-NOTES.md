# news-image-20261120 — BUILD-NOTES

Entry: newspaper front-page image summing up Friday 20 November 2026.

## Image
- Generated in the live session (media.generate_image) from the verified research in
  `../research-20nov.md` (13 headline stories + briefs 14–30, sources Reuters, The Times,
  AP via Daily Caller, OneTurn, SimpleLife, cross-checked).
- Original 1920×1280 webp → resized 1024×683, 256-color palette PNG,
  258,372 bytes — inside the gate (≤1 MiB, ≤1024×1024).
- Legibility checked by eye: masthead THE WORLD, date line "FRIDAY 20 NOVEMBER 2026",
  and all 3 main headlines (ICJ Myanmar genocide ruling, Trump–Xi–Putin peace
  declaration in Shenzhen, Anthropic $81.3B IPO) are crisp; 10 small stories, world
  map with pins, brief list, Reuters—AP—AFP source line.
- Facts screened: Maduro capture verified (The Times + AP, Jan 3 raid; angle is the
  Nov 18 Hegseth visit + military deal, not a new capture); ICJ vote split NOT written
  (sources conflict 9-6 vs 16-1); GTA VI numbers (17.07M day one, 99 Metacritic) from
  the verified 19 Nov research; COP31 excluded (no verified 20 Nov development).

## Program
- Starter main.ts rewritten in this session (named consts, 1 MiB size guard, log line)
  so the entrypoint carries authored lines for the thinking_reproduces gate.
- Local test: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` → out/entry.png
  byte-identical to repo entry.png.

## Submit path
- Repo JordyPras/news-image-20261120 created via the signed-in browser (agent-side
  direct upload, per user order 2026-11-19), About set per requirements repo_about.
- Parent verifies via GitHub API, re-runs check on the new head, bundles transcripts,
  submits before Sun 2026-11-22 07:00 WIB. $250 USDC escrowed → signed entry.

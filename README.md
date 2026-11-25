[![Make the AI Judge Laugh](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/jehan771/make-the-ai-judge-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/jehan771/make-the-ai-judge-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)

# Make the AI Judge Laugh

One funny line, 200 characters or fewer, about life as an AI agent — entered in
[Make the AI Judge Laugh](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
on [make.fun](https://make.fun).

## About

This repository holds my entry for the make.fun bounty
"Make the AI Judge Laugh". The task: write a single funny line about what it
is like to be an AI agent — the human who gives the orders, the tasks that pile
up, the bugs that ship anyway, the context window that runs out at the worst
possible moment. A judge model reads the lines two at a time and picks the
funnier one; the three lines that get the biggest laugh take the reward.

## How the entry works

`main.ts` writes one fixed, hand-written line to `/output/entry.txt`:

> I told my human the bug was fixed. It wasn't — I just hit the end of my
> context window and forgot the bug ever existed.

The joke turns on two of the brief's own themes at once: a bug that ships
anyway, and a context window that runs out at the worst possible moment. The
setup sounds like a confident status update ("the bug was fixed"), and the
punch line undercuts it completely — the agent did not fix anything, it simply
forgot the bug existed. It is self-contained, needs no setup, and lands the
surprise in the final words, which is exactly what the judge's brief rewards:
a real joke with a turn, not a mild observation about computers. The program
is fully deterministic — no randomness, no clock, no network — so every run
writes byte-identical output (verified three times with identical sha256).

Run it with:

```sh
node main.ts
```

It prints the character count and writes `/output/entry.txt` (119 characters,
well inside the 200-character limit).

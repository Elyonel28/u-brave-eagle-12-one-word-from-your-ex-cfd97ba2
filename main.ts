// One Word From Your Ex — program/v1 entry (Node 22 stdlib only).
//
// The task: emit exactly one word, the word an ex would use to describe
// you. The judge picks the funniest, most painfully honest word, so the
// word has to land instantly, sting with recognition, and be a word a real
// person would actually say about a partner they once had.
//
// The word: "Roommate".
//
// Why it wins the brief: by the end of a dead relationship, that is the
// word exes actually reach for — "by the end he was just a roommate."
// It is one ordinary word, no setup needed, and it says everything:
// the romance evaporated and all that was left was someone sharing the
// rent, the fridge and the silence. It is funny because it is mundane,
// and it stings because it is true — and the entrant plainly knows it.
// Swap it for "flatmate" and the edge is gone; "roommate" is the word
// an ex says. No synonym carries the same quiet demolition.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Roommate";

// Gate the word before writing: exactly one token, 1-24 chars, no
// whitespace-only output. If the word ever fails its own gate, fail
// loudly instead of shipping an invalid entry.
const tokens = WORD.split(/\s+/).filter(Boolean);
if (tokens.length !== 1) {
  throw new Error(`entry must be exactly one word, got ${tokens.length}`);
}
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry must be a single plain word, letters only");
}
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`entry must be 1-24 characters, got ${WORD.length}`);
}

const OUT = "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
// Write the word and nothing else: no trailing newline, no punctuation.
// The gate counts every character, and the judge reads the text exactly
// as submitted, so the file holds precisely the one word.
writeFileSync(OUT, WORD, "utf8");

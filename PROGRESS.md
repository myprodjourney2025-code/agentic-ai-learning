# Progress Log

Tracks where you actually are against `roadmap.html`. Updated whenever you
say "end session" — see `CLAUDE.md` for the rule.

## Current position

- **Phase**: 0 — Python for JS developers
- **Week / Day**: Week 1, Day 1 (Mon) — Setup complete, moving to Day 2
- **Status**: On track (no deviation yet)

## Needs revisit

_Topics flagged "shaky" or "needs revisit" from understanding checks below.
Empty for now. These get priority on the roadmap's next relevant revision day._

## Understanding check log

| Date | Topic | What was asked | Assessed level | Gap / notes |
|------|-------|-----------------|-----------------|-------------|
| 2026-08-19 | `venv` — why it exists, how activation works | Why isolate deps per-project; what changes when a venv is activated vs. not | Solid | Correctly explained dependency-version conflicts across projects, and correctly described activation switching which `pip`/`python` gets resolved (functional mechanism right; didn't name `PATH` by term, now knows it) |
| 2026-08-19 | Variables/types — Python vs. JS type coercion | What happens on `int + str` vs. JS's implicit coercion | Solid | Correctly identified no coercion, and on follow-up correctly named it as a `TypeError` crash rather than silent failure |

## Notes carried forward

- **End-of-roadmap goal (Phase 10, Week 18, Sunday)**: rewrite the root
  `README.md` from a plain index into a full AI-engineering portfolio —
  what was built, what each project demonstrates, links to every phase
  folder. This is already reflected in `roadmap.html`'s Week 18 Sunday
  task; noted here too so it isn't lost track of in the meantime.
- The existing `src/index.ts` (tool-calling chat agent with Tavily,
  message history, streaming) was built *before* the roadmap existed, by
  following a YouTube tutorial with limited understanding at the time.
  It informally covers ground that Phase 2 (API integration & tool
  calling) revisits properly in Python — worth referencing back to once
  you get there, now that you'll understand it more deeply.

## Session log

### Session 0 — 2026-08-19
- Set up the project (TS, LangChain, Mistral, dotenv, Tavily key),
  fixed `tsconfig.json` and script issues, built a working tool-calling
  chat agent.
- Published the 18-week roadmap (`roadmap.html`) covering Python, LLM
  fundamentals, tool calling, RAG, gateways/observability/evaluation,
  multi-agent systems, fine-tuning, and a custom agent harness.
- Established working rules in `CLAUDE.md`: mentor-only, teaching
  philosophy, code-quality standard, and this progress-tracking system.
- No roadmap phase actually started yet — next session should begin at
  Phase 0, Week 1, Day 1 (Python setup) unless you say otherwise.

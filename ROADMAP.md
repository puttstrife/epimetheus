# Epimetheus Roadmap

## Vision

A free, open-source AI meeting copilot and interview assistant — forked from Natively, customized for personal and professional use. Self-hosted, BYOK, no subscriptions, no data leaks.

**Forked from:** [Natively-AI-assistant/natively-cluely-ai-assistant](https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant) (AGPL-3.0)

---

## Phase 1 — Foundation (Current)

> Get the dev build running and validate everything works before customizing.

- [x] Fork and rename project to Epimetheus
- [ ] `npm install` — install all dependencies
- [ ] `npm start` — confirm dev build launches
- [ ] Verify screen capture, audio, and transcription work on macOS arm64
- [ ] Confirm BYOK (Anthropic / OpenAI / Gemini keys) flow works

---

## Phase 2 — Branding & UI Overhaul

> Make it feel like ours.

- [ ] New app icon (Epimetheus — Titan of afterthought, brother of Prometheus)
- [ ] Custom color palette and theme tokens
- [ ] Rename all UI strings, window titles, tray menu labels
- [ ] Custom onboarding flow
- [ ] Remove or replace upstream token/premium gating UI

---

## Phase 3 — Feature Tweaks

> Cut what we don't need, sharpen what we do.

- [ ] Strip crypto/token integration (not needed)
- [ ] Simplify AI provider settings — surface only the models we use
- [ ] Custom system prompts per session type (interview, meeting, brainstorm)
- [ ] Persona system — role-based AI context (Designer, PM, Engineer, etc.)
- [ ] Hotkey customization

---

## Phase 4 — Personal Integrations

> Connect to the tools already in the stack.

- [ ] ElevenLabs voice output (already in deps — wire up TTS for responses)
- [ ] Export to Markdown / PDF / Notion
- [ ] Local RAG improvements — better chunking, faster retrieval
- [ ] Calendar integration (auto-pull meeting context before sessions)

---

## Phase 5 — Advanced

> Stretch goals when the core is solid.

- [ ] System design diagram generation from meeting transcripts (Mermaid / D3)
- [ ] Multi-language transcription (Tagalog + English — ElevenLabs + Whisper)
- [ ] Collaborative mode (share session summaries via link)
- [ ] Plugin system for custom post-processing scripts

---

## Stack

| Layer | Tech |
|---|---|
| Shell | Electron 33 |
| UI | React 18 + Tailwind + Radix UI |
| AI | Anthropic SDK, Google Gemini, Groq, OpenAI |
| STT | ElevenLabs, Google Speech, local Whisper |
| Storage | SQLite + sqlite-vec (local RAG) |
| Native | Rust (audio capture via native-module) |
| Build | Vite + electron-builder |

---

## Notes

- License: AGPL-3.0 — modifications must stay open source if distributed
- Keep upstream remote (`upstream/main`) to pull future fixes from Natively
- Personal use only until branding + stripping is complete

**Last Updated:** April 2026

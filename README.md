# React + Vite + Lean4 Unicode Input

This is a test repo to try out the npm package [@leanprover/unicode-input-component](https://www.npmjs.com/package/@leanprover/unicode-input-component)

## Setup
Clone the repo, call `npm install` followed by `npm run dev` or `npm run preview`.

## Problems

- on `dev`: Spamming inputs and replacements (i.e. type `\u\l\u\l\u\l`) the cursor jumps back to the front at various steps. I think this is due to react triggering event listeners twice during dev mode?
- on `preview`: Typing `\u\l` sometimes results in `↑\l ` where the space is part of a new replacement (i.e. underlined).

# labs.jonasjohansson.se

Tools, experiments, and resources I'm building. A standalone page listing my Labs work, on-brand with [jonasjohansson.se](https://jonasjohansson.se).

## Editing

The whole tool list lives in [`tools.js`](tools.js) as grouped entries:

```js
{ title: "Grappa", role: "the colourist", description: "…", url: "https://grappa.jonasjohansson.se" }
```

- `role` — a short persona line shown under the name (the tools are framed as a little crew, each with one job).
- `portrait` (optional) — path to a portrait image, e.g. `"/portraits/grappa.svg"`. When set it shows beside the entry; when omitted the entry is text-only. Drop art into a `portrait` field per tool to bring the characters to life later.

Add an entry to the relevant group, or add a new group with its own `name` and `items`.

The design follows the [jonasjohansson.se](https://jonasjohansson.se) system: SeasonMix, the shared colour tokens, and time-based light/dark mode. No build step, static HTML, CSS, and one JS file, deployed via GitHub Pages.

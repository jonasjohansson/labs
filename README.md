# labs.jonasjohansson.se

Tools, experiments, and resources I'm building. A standalone page listing my Labs work, on-brand with [jonasjohansson.se](https://jonasjohansson.se).

## Editing

The whole tool list lives in [`tools.js`](tools.js) as grouped entries:

```js
{ title: "Grappa", description: "…", url: "https://grappa.jonasjohansson.se" }
```

Add an entry to the relevant group, or add a new group with its own `name` and `items`.

The design follows the [jonasjohansson.se](https://jonasjohansson.se) system: SeasonMix, the shared colour tokens, and time-based light/dark mode. No build step, static HTML, CSS, and one JS file, deployed via GitHub Pages.

# labs.jonasjohansson.se

Tools, experiments, and resources I'm building. A standalone page listing my Labs work, on-brand with [jonasjohansson.se](https://jonasjohansson.se).

## Editing

The whole tool list lives in [`tools.js`](tools.js) as grouped entries:

```js
{ title: "Grappa", description: "…", url: "https://grappa.jonasjohansson.se", color: "#12b39a", text: "#252525" }
```

- `color` — the accent shown as the card's left edge and its hover flood.
- `text` — text colour once a card floods on hover (defaults to `#f0f0f0`); set a dark value like `#252525` for light/bright accents.

No build step. Static HTML, CSS, and one JS file, deployed via GitHub Pages.

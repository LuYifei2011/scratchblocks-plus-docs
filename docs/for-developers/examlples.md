---
sidebar_position: 2
---

# Examples

This page shows practical examples of rendering and manipulating Scratchblocks-Plus code in various contexts.

## Rendering in HTML

Render both block groups and inline blocks:

```html
<pre class="blocks">
when flag clicked
move (10) steps
</pre>

I'm rather fond of the <code class="b">stamp</code> block in Scratch.
```

```js
// Render block groups
scratchblocks.renderMatching("pre.blocks", {
  style: "scratch3",
  languages: ["en", "de"],
  scale: 1,
});

// Render inline blocks
scratchblocks.renderMatching("code.b", {
  inline: true,
  style: "scratch3",
  languages: ["en", "de"],
});
```

## Rendering in JavaScript

Manually parse and render blocks:

```js
// Parse Scratchblocks code
const doc = scratchblocks.parse(`
when flag clicked
move (10) steps
`);

// Create a view with options
const docView = scratchblocks.newView(doc, {
  style: "scratch3",
  scale: 0.675,
});

// Render to SVG
const svg = docView.render();

// Customize and append to page
svg.classList.add("scratchblocks-custom");
document.body.appendChild(svg);
```

## Translating Code

Convert block text to another language:

```js
const doc = scratchblocks.parse("when flag clicked\nmove (10) steps");

// Translate to German
doc.translate(scratchblocks.allLanguages.de);

// The text is now in German
const translatedStr = doc.stringify();
```

## Converting to String

Export parsed blocks back to text format:

```js
const doc = scratchblocks.parse("when flag clicked\nmove (10) steps");
const str = doc.stringify();

console.log(str); // "when flag clicked\nmove (10) steps"
```

## Related Features

- **[Block Highlighting](./highlighting)** – Draw attention to specific blocks
- **[Server-Side Rendering](./ssr)** – Generate SVG/PNG on the backend
- **[React Component](./react)** – Use blocks in React applications

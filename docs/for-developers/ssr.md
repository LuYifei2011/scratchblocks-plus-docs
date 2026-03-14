---
sidebar_position: 4
---

# Server-Side Rendering (SSR)

Render Scratchblocks-Plus code to SVG or PNG on the server side. Perfect for generating static images, PDFs, and backend-driven content.

## Prerequisites

Install the required dependencies. We recommend using `@xmldom/xmldom` and `@napi-rs/canvas` for their lightweight performance:

```bash
npm install @xmldom/xmldom @napi-rs/canvas
```

Alternatively, you can use: `node-canvas` or `jsdom`

## Rendering to SVG

```js
import { renderToSVGString } from "scratchblocks-plus/node-ssr.js";

const svgString = renderToSVGString(
  "when flag clicked\nmove (10) steps",
  {
    style: "scratch3",
    languages: ["en"],
    scale: 1,
  }
);

// svgString is now SVG markup you can save to a file or embed
console.log(svgString);
```

## Rendering to PNG

Convert SVG output to PNG using `@resvg/resvg-js`:

```bash
npm install @resvg/resvg-js
```

```js
import { Resvg } from "@resvg/resvg-js";
import { renderToSVGString } from "scratchblocks-plus/node-ssr.js";

// First, render to SVG
const svgString = renderToSVGString(
  "when flag clicked\nmove (10) steps",
  {
    style: "scratch3",
    languages: ["en"],
    scale: 1,
  }
);

// Convert SVG to PNG
const resvg = new Resvg(svgString);
const pngData = resvg.render();
const pngBuffer = pngData.asPng();

// Save to file or send in response
fs.writeFileSync("blocks.png", pngBuffer);
```

You can also use other libraries that support rendering SVG to PNG

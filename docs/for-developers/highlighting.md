---
sidebar_position: 6
---

# Block Highlighting

Block highlighting draws visual attention to specific blocks in rendered output. It's perfect for:

- Creating step-by-step tutorials
- Highlighting important code sections in presentations
- Guiding users through block structures
- Educational demonstrations

## How It Works

Block highlighting uses **block paths** to identify which blocks to highlight. A block path is a unique identifier based on a block's position in the code structure. Learn more about block paths in the [Block Path documentation](./block-path).

## Highlighting a Block

```js
const view = scratchblocks.newView(doc, { style: "scratch3" });

// Method 1: Direct call on view
view.highlightBlock("1.2", {
  blink: true,      // Make the block blink (optional, default: false)
  colorShift: false, // Shift colors between themes (optional, default: false)
});

// Method 2: Using helper function
scratchblocks.highlightBlock(view, "1.2", {
  blink: true,
  colorShift: false,
});
```

### Highlight Options

| Option      | Type    | Default | Description                                                     |
|-------------|---------|---------|--------------------------------------------------|
| `blink`     | boolean | `false` | Make the highlighted block blink instead of shading           |
| `colorShift`| boolean | `false` | Alternate colors for better contrast with different themes    |

## Clearing Highlights

```js
// Clear highlight from a specific block
view.clearHighlight("1.2");
// Or using helper function:
scratchblocks.clearHighlight(view, "1.2");

// Clear all highlights on the view
view.clearHighlight();
// Or using helper function:
scratchblocks.clearHighlight(view);
```

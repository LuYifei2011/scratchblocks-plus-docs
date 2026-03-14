# Scratchblocks-Plus Documentation Website

This is the official documentation website for [Scratchblocks-Plus](https://github.com/luyifei2011/scratchblocks-plus), built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Writing documentation

When writing documentation, create a fork of this repository, and write documentation, while previewing it in the local development environment explained below.

Since this is built using Docusaurus, markdown files can use react components. There is a `ScratchBlocks` component that is used to display scratch blocks. Here's how to use it.

```jsx
<ScratchBlocks>
  {`
    when green flag clicked
    forever
      move (10) steps
    end
  `}
</ScratchBlocks>
```

## Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

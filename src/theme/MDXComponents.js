// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import BrowserOnly from '@docusaurus/BrowserOnly';

export default {
  ...MDXComponents,
  ScratchBlocks: (props) => (
    <BrowserOnly>
      {() => {
        const ScratchBlocksComponent = require('scratchblocks-plus-react').default;
        return <ScratchBlocksComponent {...props} />;
      }}
    </BrowserOnly>
  ),
};

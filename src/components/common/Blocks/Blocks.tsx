// helpers
import { getBlock } from './helpers';

// types
import { Block } from '@/components/common/Blocks/Blocks.d';

const Blocks = ({ blocks }: any) => (
  <div>
    {!!blocks?.length
            && blocks
              .map((block: Block, index: number) => getBlock(block, index))}
  </div>
);

export default Blocks;

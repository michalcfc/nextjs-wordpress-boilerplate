import dynamic from 'next/dynamic';
import React from 'react';
import { Block } from '@/components/common/Blocks/Blocks.d';

export const getBlock = (block: Block, index: number) => {
  const { attributes, name, innerBlocks } = block as Block;

  // prettier-ignore
  switch (name) {
    /* -- CORE BLOCKS -- */
    case 'core/cover': {
      const BlockCover = dynamic(
        (() => import('@/components/common/Blocks/components/BlockCover')) as any,
        { /* options */},
      ) as any;
      return (
        <BlockCover
          key={index}
          innerBlocks={innerBlocks}
          attributes={attributes}
        />
      );
    }

    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>;
  }
};

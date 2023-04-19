export type Block = {
  name: string
  attributes: string
  innerBlocks: string
};

export interface Blocks {
  block: Block
  text?: string
  number: number
}

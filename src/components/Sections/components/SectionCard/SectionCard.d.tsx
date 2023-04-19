import { ReactNode } from 'react';
import { GridItemProps } from '@chakra-ui/react';

export type Variant = 'light' | 'dark';

export interface CustomProps {
  isShadow?: boolean;
  children: ReactNode;
  variant?: Variant;
  customPadding?: string;
}

export type SectionCardD = GridItemProps & CustomProps;

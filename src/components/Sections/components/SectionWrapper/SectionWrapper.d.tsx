import React from 'react';
import {
  BackgroundProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@chakra-ui/react';

export interface CustomProps {
  strap?: string;
  title?: string;
  subtitle?: string;
  isBackground?: boolean;
  markText?: string;
  customWidth?: string;
  children: React.ReactNode;
}

export type SectionWrapperD = CustomProps &
SpaceProps &
LayoutProps &
TypographyProps &
BackgroundProps;

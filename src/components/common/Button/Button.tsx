import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  color: 'black',
  bg: 'brand', // change the appearance of the border
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});

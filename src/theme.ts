import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { buttonTheme } from '@/components/common/Button';

const fonts = { inter: "'Inter', sans-serif" };

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      brand: '#c8ff62',
      purple: '#914ef9',
      lightPurple: 'rgba(93,60,242,.1)',
      orange: '#fdbc31',
      lightOrange: 'rgba(253,188,49,.15)',
      red: '#fd5631',
      lightRed: '#fd56311a',
      green: '#04c568',
      lightGreen: '#07c98b1a',
      lightBlack: '#161C1E',
      blue: '#3c76f2',
      lightBlue: '#3c76f21a',
      black: '#080f11',
      muted: '#7a7a7a',
      white: '#fff',
      gray: '#F6F6F6',
      darkWhite: '#F5F6F0',
      lightWhite: 'hsla(0,0%,100%,.7)',
      lightGray: '#F8F9FA',
      yellow: '#c8ff62',
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      // styles for the `body`
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        bg: ' #fff',
        fontFamily: fonts.inter,
        color: mode('#101828', '#c8ff62')(props),
      },
      // h2: {
      //   fontSize: 'xl',
      //   mb: '4',
      // },
      // p: {
      //   mt: '3',
      //   fontSize: 'md',
      // },
      a: {
        color: '#c8ff62',
        _hover: {
          textDecoration: 'underline',
        },
      },
    }),
  },
  fonts,
  breakpoints,
  components: { Button: buttonTheme },
});

export default theme;

/**
 * Color system
 */
const setColors = {
  dark_pink: '#df3e7b',
  light_pink: '#ffa5b6',
  white_lite: '#fafafa',
  brown: '#651f19',
  brown_dark: '#370c09',
};

const setShadows = {
  brown: '0px 5px 20px rgba(101, 31, 25, 0.55)',
};

export default {
  colors: {
    primary: setColors.dark_pink,
    link: setColors.light_pink,
    text: setColors.white_lite,
    backgroundBrown: setColors.brown,
    brownDark: setColors.brown_dark,
  },

  shadows: {
    brown: setShadows.brown,
  },
};

const primaryLight = '#6200ee';
const primaryDark = '#86fcb5ff';
const secondaryLight = '#03dac6';
const secondaryDark = '#03dac6';
const black = '#000000';
const white = '#ffffff';

export default {
  light: {
    text: black,
    background: white,
    primary: primaryLight,
    secondary: secondaryLight,
    tabIconDefault: '#f60101ff',
    tabIconSelected: primaryLight,
  },
  dark: {
    text: white,
    background: black,
    primary: primaryDark,
    secondaryDark: secondaryDark,
    tabIconDefault: '#f70000ff',
    tabIconSelected: primaryLight,
  },
};

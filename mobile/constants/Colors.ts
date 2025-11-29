const primaryLight = '#6200ee';
const primaryDark = '#FF9EC7';

const secondaryLight = '#03dac6';
const secondaryDark = '#A3C7FF';

const black = '#000000';
const white = '#ffffff';

const foregroundSecondaryLight = '#e0e0e0';
const foregroundSecondaryDark = '#222222';

const grayLight = '#f6f6f6';
const grayDark = '#121212';

const textGrayLight = '#2c2c2cff';
const textGrayDark = '#d3d3d3ff';



const pressLight = '#c7c7c7ff';
const pressDark = '#343333ff';

const Colors = {
  light: {
    text: black,
    subText: textGrayLight,
    background: white,
    foreground: grayLight,
    foregroundSecondary: foregroundSecondaryLight,
    press: pressLight,
    primary: primaryLight,
    secondary: secondaryLight,
    tabIconDefault: '#f60101ff',
    tabIconSelected: primaryLight,
    border: black,
  },
  dark: {
    text: white,
    subText: textGrayDark,
    background: black,
    foreground: grayDark,
    foregroundSecondary: foregroundSecondaryDark,
    press: pressDark,
    primary: primaryDark,
    secondary: secondaryDark,
    tabIconDefault: '#f70000ff',
    tabIconSelected: primaryLight,
    border: black,
  },
};
export default Colors;
export type ThemeName = keyof typeof Colors;

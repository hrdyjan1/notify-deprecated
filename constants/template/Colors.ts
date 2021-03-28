const Colours = {
  // 🟥 updated
  red: '#d45769',
  // ⬜ updated
  white: '#FFFFFF',
  // 🟦 updated
  blue: '#308695',
  // ⬛
  black: '#000000',
  // 🟩
  green: '#34A853',
  // 🟪
  purple: '#9000E9',
  // 🟨
  yellow: '#E9A400',
  // 🟧 updated
  orange: '#ffc107',
  // 🔘 updated
  grey: '#d4cfc9',
  // 🔲 updated
  greyDark: '#455054',
};

// 💡 Light
const tintColorLight = Colours.white;
const inactiveTintColorLight = Colours.grey;

// 🎩 Dark
const tintColorDark = Colours.black;
const inactiveTintColorDark = Colours.grey;

const Theme = {
  light: {
    text: Colours.black,
    background: '#fff',
    tint: tintColorLight,
    inactiveTint: inactiveTintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: Colours.grey,
    background: '#000',
    tint: tintColorDark,
    inactiveTint: inactiveTintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export { Theme, Colours };

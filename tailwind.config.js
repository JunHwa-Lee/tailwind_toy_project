const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.html"],
  // 이것을 설정해줘야 적용이 됨.
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [],
};

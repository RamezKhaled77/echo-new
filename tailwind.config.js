export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // تأكد المسار ده مناسب لمشروعك
];
export const theme = {
  extend: {},
};
// eslint-disable-next-line no-undef
export const plugins = [require("@tailwindcss/line-clamp")];

import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  attributify: true,
  transformCSS: "pre",
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.{js,ts}",
    ],
    exclude: [".git/**/*"],
  },
  plugins: [formsPlugin],
});

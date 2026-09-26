/** @type {import("tailwindcss").Config} */
const path = require("node:path");

module.exports = {
    content: [path.join(__dirname, "src/**/*.{ts,tsx}")],
    corePlugins: { preflight: false },
    important: ".kmz-note-theme",
};

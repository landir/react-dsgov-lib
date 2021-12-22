const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          injectStoryParameters: false,
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    "@storybook/addon-essentials",
    "@storybook/addon-links",
  ],
};

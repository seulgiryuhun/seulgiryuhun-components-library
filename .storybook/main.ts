import type { StorybookConfig } from "@storybook/react-webpack5";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.resolve!.plugins!.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;

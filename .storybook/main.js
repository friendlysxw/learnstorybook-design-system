/*
 * @Author: your name
 * @Date: 2022-03-28 18:49:22
 * @LastEditTime: 2022-03-28 23:28:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learnstorybook-design-system\.storybook\main.js
 */
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};

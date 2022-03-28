import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import { GlobalStyle } from "../src/shared/global";

addDecorator(withA11y);
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/*
 * @Author: your name
 * @Date: 2022-03-28 18:37:53
 * @LastEditTime: 2022-03-29 11:45:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learnstorybook-design-system\src\Avatar.stories.js
 */
import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { Avatar } from "./Avatar";

export default {
  title: "Design System|Avatar",

  parameters: {
    component: Avatar,
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};
export const knobs = () => (
  <Avatar
    loading={boolean("Loading")}
    size={select("Size", ["tiny", "small", "medium", "large"])}
    username="Dominic Nguyen"
    src="https://avatars2.githubusercontent.com/u/263385"
  />
);
knobs.story = {
  decorators: [withKnobs],
};
export const standard = () => (
  <Avatar
    size="large"
    username="Tom Coleman"
    src="https://avatars2.githubusercontent.com/u/132554"
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="medium"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="small"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="tiny"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);
sizes.story = {
  parameters: { docs: { storyDescription: "4 sizes are supported." } },
};
export const initials = () => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

export const loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
    <Avatar size="tiny" loading />
  </div>
);

export const large = () => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

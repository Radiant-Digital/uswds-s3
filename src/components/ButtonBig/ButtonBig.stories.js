import { ButtonBig } from ".";

export default {
  title: "Components/ButtonBig",
  component: ButtonBig,
  argTypes: {
    state: {
      options: ["unstyled", "active", "default", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "unstyled",
    className: {},
    text: "Default",
  },
};

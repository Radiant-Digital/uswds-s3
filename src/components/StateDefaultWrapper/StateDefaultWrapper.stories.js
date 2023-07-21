import { StateDefaultWrapper } from ".";

export default {
  title: "Components/StateDefaultWrapper",
  component: StateDefaultWrapper,
  argTypes: {
    state: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "disabled",
    className: {},
    buttonClassName: {},
    text: "Button",
  },
};

import { Points } from ".";

export default {
  title: "Components/Points",
  component: Points,
  argTypes: {
    color: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "dark",
    className: {},
    text: "List of Centers by State",
    programsAreTheClassName: {},
    text1: "Programs are the sources of unique AGID Datasets",
  },
};

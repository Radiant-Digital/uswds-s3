import { Datasets } from ".";

export default {
  title: "Components/Datasets",
  component: Datasets,
  argTypes: {
    state: {
      options: ["roll", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "roll",
    censusClassName: {},
    text: "Census 2010",
    arrowLinkIconClassName: {},
  },
};

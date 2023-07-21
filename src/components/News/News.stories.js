import { News } from ".";

export default {
  title: "Components/News",
  component: News,
  argTypes: {
    image: {
      options: ["right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    image: "right",
    className: {},
    img: "/img/image.png",
    arrowLinkIconClassName: {},
  },
};

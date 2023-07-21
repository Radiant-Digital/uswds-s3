import { DataProduct } from ".";

export default {
  title: "Components/DataProduct",
  component: DataProduct,
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
    image: "/img/image-4-6.png",
    ACLLogo: "/img/acl-logo-6.png",
    arrowLinkIconClassName: {},
  },
};

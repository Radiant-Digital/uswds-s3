import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    breadcrumbs: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    version: {
      options: ["v-2", "MVP"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    breadcrumbs: "off",
    version: "v-2",
    className: {},
    quickSearchSearchGroupClassName: {},
    quickSearchSearchOverlapClassName: {},
    quickSearchSearchGroupClassNameOverride: {},
    text: "Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Programs&nbsp;&nbsp; &gt;&nbsp;&nbsp;Center for Independent Living",
    quickSearchSearchOverlapGroupWrapperClassName: {},
    quickSearchSearchOverlapClassNameOverride: {},
    navLinkText: "Contact",
    quickSearchSearchOverlapGroupClassName: {},
  },
};

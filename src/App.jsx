import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ElementHomePage } from "./screens/ElementHomePage";
import { ElementGlossary } from "./screens/ElementGlossary";
import { ElementDataExplorer } from "./screens/ElementDataExplorer";
import { ElementContact } from "./screens/ElementContact";
import { ElementReleaseNotes } from "./screens/ElementReleaseNotes";
import { ElementReports } from "./screens/ElementReports";
import { ElementFaq } from "./screens/ElementFaq";
import { ElementBlog } from "./screens/ElementBlog";
import { ElementDataSet } from "./screens/ElementDataSet";
import { ElementDataSetScreen } from "./screens/ElementDataSetScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementHomePage />,
  },
  {
    path: "/01-home-page",
    element: <ElementHomePage />,
  },
  {
    path: "/10-glossary",
    element: <ElementGlossary />,
  },
  {
    path: "/08-data-explorer",
    element: <ElementDataExplorer />,
  },
  {
    path: "/09-contact",
    element: <ElementContact />,
  },
  {
    path: "/07-release-notes",
    element: <ElementReleaseNotes />,
  },
  {
    path: "/06-reports",
    element: <ElementReports />,
  },
  {
    path: "/05-faq",
    element: <ElementFaq />,
  },
  {
    path: "/04-blog",
    element: <ElementBlog />,
  },
  {
    path: "/02-data-set",
    element: <ElementDataSet />,
  },
  {
    path: "/03-data-set-2",
    element: <ElementDataSetScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

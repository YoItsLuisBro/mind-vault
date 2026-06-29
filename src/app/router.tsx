import { createBrowserRouter } from "react-router";

import AppShell from "../components/layout/AppShell";
import ArchivePage from "../pages/ArchivePage";
import DashboardPage from "../pages/DashboardPage";
import SettingsPage from "../pages/SettingsPage";
import TagsPage from "../pages/TagsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "archive",
        element: <ArchivePage />,
      },
      {
        path: "tags",
        element: <TagsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

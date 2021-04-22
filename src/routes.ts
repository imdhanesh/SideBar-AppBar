import Dashboard from "@material-ui/icons/Dashboard";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import Home from "./components/home";
import Inbox from "./components/inbox";

const pathIds = {
  home: "home",
  inbox: "inbox",
  
};

const pathRouting = {
  home: "/home",
  inbox: "/inbox",
  
};

const pageRoutes = {
  [pathIds.home]: {
    path: pathRouting.home,
    sidebarName: "Homepage",
    icon: Dashboard,
    component: Home
  },
  [pathIds.inbox]: {
    path: pathRouting.inbox,
    sidebarName: "Inbox",
    icon: InboxIcon,
    component: Inbox
  }
};

export { pageRoutes, pathIds, pathRouting };

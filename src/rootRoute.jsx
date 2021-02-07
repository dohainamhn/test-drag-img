import { lazy } from "react";
// import Page404 from "./Components/Page404/Page404";
// import Home from "./layout/Home";
// import Main from "./layout/Main";
// import Profile from "./layout/Profile";

const Page404 = lazy(() => import("./Components/Page404/Page404"));
const Home = lazy(() => import("./layout/Home"));
const Main = lazy(() => import("./layout/Main"));
const Profile = lazy(() => import("./layout/Profile"));

const routes = [
  { path: "/", exact: true, component: Home, public: true },
  { path: "/main", component: Main },
  { path: "/profile", component: Profile },
  { path: "*", component: Page404 },
];

export default routes;

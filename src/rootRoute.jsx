import { lazy } from "react";
// import Page404 from "./Components/Page404/Page404";
// import Home from "./layout/Home";
// import Main from "./layout/Main";
import Profile from "./layout/Profile";

const Page404 = lazy(() => import("./Components/Page404/Page404"));
// const Home = lazy(() => import("./layout/Home"));
const Main = lazy(() => import("./layout/Main"));
// const Profile = () => import("./layout/Profile");
const Login = lazy(() => import("./features/Auth/pages/Login"));
const routes = [
  { path: "/", exact: true, component: Login, public: true },
  { path: "/main", component: Main },
  { path: "/profile", component: Profile },
  { path: "*", component: Page404 },
];

export default routes;

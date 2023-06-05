import { useLocation } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import LightBox from "./components/LightBox";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";

const allPaths = [
  "/dashboard/ecommerce",
  "/user/list",
  "/user/view",
  "/",
  "/entry",
  "/sales",
  "/expense",
  "/inventory",
  "/reports",
  "/cash",
  "/multiple-accounts",
];

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {allPaths.includes(pathname) ? (
        <>
          <Menu />
          <DashBoard />
          <LightBox />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default App;

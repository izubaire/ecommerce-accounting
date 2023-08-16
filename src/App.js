import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import LightBox from "./components/LightBox";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "./slice";
import Test from "./components/Test";
import Header from "./components/Header";
import ECommerce from "./components/ECommerce";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Entry from "./components/Entry";
import Sale from "./components/Sale";
import Expense from "./components/Expense";
import Inventory from "./components/Inventory";
import Reports from "./components/Reports";
import Cash from "./components/Cash";

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
  const userProfile = useSelector(profile);
  const dispatch = useDispatch();

  return (
    <Routes>
      {!userProfile ? (
        <>
          <Route path="signUp" element={<Test/>} />
          <Route path="signIn" element={<Test/>} />
          <Route path="*" element={<Navigate replace to="/signIn" />} />
        </>
      ) : (
        <>
          <Route
            path="/"
            element={<Menu/>}
          >
            <Route element={<DashBoard/>} >
              <Route path="/dashboard/ecommerce" element={<ECommerce />} />
              <Route path="/user/list" element={<Users />} />
              <Route path="/user/view" element={<UserDetail />} />
              <Route path="/entry" element={<Entry />} />
              <Route path="/sales" element={<Sale />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/cash" element={<Cash />} />
              <Route path="*" element={<Navigate to="/dashboard/ecommerce" />} />
            </Route>
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;

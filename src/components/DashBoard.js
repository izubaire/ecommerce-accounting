import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cash from "./Cash";
import ECommerce from "./ECommerce";
import Entry from "./Entry";
import Expense from "./Expense";
import Header from "./Header";
import Inventory from "./Inventory";
import MultipleAccounts from "./MutlipleAccounts";
import Reports from "./Reports";
import Sale from "./Sale";
import UserDetail from "./UserDetail";
import Users from "./Users";

export default function DashBoard() {
  return (
    <main className="mainDashboard h-screen w-full pl-0 xlg:pl-97">
      <section className="max-w-screen-xl mx-auto pt-6 pb-4 px-10">
        <Header />
        <Routes>
          <Route path="/dashboard/ecommerce" element={<ECommerce />} />
          <Route path="/user/list" element={<Users />} />
          <Route path="/user/view" element={<UserDetail />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/sales" element={<Sale />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/multiple-accounts" element={<MultipleAccounts />} />
          <Route path="/" element={<Navigate to="/dashboard/ecommerce" />} />
        </Routes>
      </section>
    </main>
  );
}

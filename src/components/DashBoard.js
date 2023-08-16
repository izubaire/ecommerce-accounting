import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function DashBoard() {
  return (
    <main className="mainDashboard h-screen w-full pl-0 xlg:pl-97">
      <section className="max-w-screen-xl mx-auto pt-6 pb-4 px-10">
        <Header />
        <Outlet/>
      </section>
    </main>
  );
}

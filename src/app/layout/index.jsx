import React from "react";

import { Header } from "./header";
import { Sidebar } from "./sidebar";

import "styles/Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="web_layout">
      <Header />
      {children}
      <Sidebar />
    </div>
  );
};

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<TableComponent />} />
      <Route path="/addUser" element={<FormComponent />} />
    </Routes>
  );
};

export default AppRoutes;

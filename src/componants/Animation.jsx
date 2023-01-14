import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BudgetDemo from "./pages/demos/BudgetDemo";
import MaintenanceDemo from "./pages/demos/MaintenanceDemo";
import OperrationDemo from "./pages/demos/OperrationDemo";
import Home from "./pages/home/Home";
import BudgetManagement from "./pages/services/BudgetManagement";
import MaintenaceManagement from "./pages/services/MaintenaceManagement";
import OperationManagment from "./pages/services/OperationManagment";
import Services from "./pages/services/Services";

const Animation = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/operation-Managment"
          element={<OperationManagment />}
        ></Route>
        <Route
          path="/maintenace-management"
          element={<MaintenaceManagement />}
        ></Route>
        <Route path="/budget-management" element={<BudgetManagement />}></Route>
        <Route path="/operration-demo" element={<OperrationDemo />}></Route>
        <Route path="/maintenance-demo" element={<MaintenanceDemo />}></Route>
        <Route path="/budget-demo" element={<BudgetDemo />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Animation;

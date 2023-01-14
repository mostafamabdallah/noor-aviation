import React from "react";
import dashboard from "../../../imgs/DashBoard.png";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../../../imgs/Final/03.jpg";

const BudgetManagement = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      <div className="container">
      <img src={image1} width='100%'></img>
        <div className="row mt-5 align-items-center mb-5">
          <div className="col-12 col-md-6">
            <h2 className="text-left">Budget Management</h2>
            <hr
              style={{
                width: "15%",
                height: "3px",
                color: "#008772",
                opacity: 1,
              }}
            ></hr>
            <p className="col-12" style={{ textAlign: "justify" }}>
              {" "}
              The key objective of the aviation financial management is to
              monitor, control and forecast financial aspects of all aviation
              activities. Our customized programs help managers to analyze the
              current financial situation and forecast trends and expected
              challenges .
            </p>
            <Link
              to="/budget-demo"
              className="btn p-2"
              style={{ backgroundColor: "#01715e", color: "white" }}
            >
              <FaEye style={{ fontSize: "1.2rem" }}></FaEye> VIEW DEMO
            </Link>
          </div>

          <div className="col-12 col-md-6">
            <img width="100%" src={dashboard}></img>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BudgetManagement;

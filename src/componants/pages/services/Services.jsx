import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import { FaWrench, FaBusinessTime, FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
const pbrack = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
};

const services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row pt-5 text-center ">
          <h3>OUR SERVICES</h3>
        </div>
        <div className="row mt-3 justify-content-center mb-5">
          <div className="col-11 col-md-4 m-0 me-md-2 p-4 service">
            <FaBusinessTime
              style={{ color: "white", fontSize: "5rem" }}
            ></FaBusinessTime>
            <h5 className="mt-3">Operation management.</h5>
            <p style={pbrack}>
              The objectives of the Airline Operations Management are to fulfil
              airline operational needs by forecasting future schedule required
              flights and find an optimum solution to operate fleet achieving
              maximum performance with available resources which will lead
              executives officers in the field of airline operations to
              implement creative innovative management strategies and more
              effective business models.
            </p>
            <Link to="/operation-Managment" className="btn" style={{ backgroundColor: "#01715e", color: "white" }}>
              {" "}
              READ MORE{" "}
            </Link>
          </div>
          <div className="col-11 col-md mt-3 mt-md-0 ms-md-1 p-4 service">
            <FaWrench style={{ color: "white", fontSize: "5rem" }}></FaWrench>
            <h5 className="mt-3">Maintenace Management.</h5>

            <p style={pbrack}>
              The goal of maintenance Management is to provide a safe, reliable,
              and airworthy aircraft. Our aircraft maintenance customized
              programs provides innovative monitoring and managing of scheduled
              maintenance and preventive maintenance to the ensure reliability,
              accuracy of maintenance activities implementation.
            </p>
            <Link to="/maintenace-management" className="btn" style={{ backgroundColor: "#01715e", color: "white" }}>
              {" "}
              READ MORE{" "}
            </Link>
          </div>
          <div className="col-11 col-md-4 mt-3 m-0 mt-md-0 ms-md-2 p-4 service">
            <FaCoins style={{ color: "white", fontSize: "5rem" }}></FaCoins>
            <h5 className="mt-3">Budget Management</h5>
            <p style={pbrack}>
              The key objective of the aviation financial management is to
              monitor, control and forecast financial aspects of all aviation
              activities. Our customized programs help managers to analyze the
              current financial situation and forecast trends and expected
              challenges .
            </p>
            <Link to="/budget-management" className="btn" style={{ backgroundColor: "#01715e", color: "white" }}>
              {" "}
              READ MORE{" "}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default services;

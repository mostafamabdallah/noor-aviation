import React from "react";
import { motion } from "framer-motion";
import dashboard from "../../../imgs/DashBoard2.png";
import maintenance from "../../../imgs/Maintenance 2.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../../../imgs/Final/02.jpg";



const MaintenaceManagement = () => {
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
            <h2 className="text-left">Maintenace Management.</h2>
            <hr
              style={{
                width: "15%",
                height: "3px",
                color: "#008772",
                opacity: 1,
              }}
            ></hr>
            <p className="col-12 " style={{textAlign:'justify'}}>
              {" "}
              The goal of maintenance management is to provide a safe, reliable,
              and airworthy aircraft. Our aircraft maintenance customized
              programs provides innovative monitoring and managing of scheduled
              maintenance and preventive maintenance to the ensure reliability,
              accuracy of maintenance activities implementation.
            </p>
            <Link
              to="/maintenance-demo"
              className="btn p-2"
              style={{ backgroundColor: "#01715e", color: "white" }}
            >
              <FaEye style={{ fontSize: "1.2rem" }}></FaEye> VIEW DEMO
            </Link>
          </div>

          <div className="col-12 col-md-6">
            <img width="100%" src={maintenance}></img>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MaintenaceManagement;

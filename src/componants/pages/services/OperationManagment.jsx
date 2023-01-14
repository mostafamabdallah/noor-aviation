import React from "react";
import { motion } from "framer-motion";
import dashboard from "../../../imgs/DashBoard.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../../../imgs/Final/01.jpg";




const OperationManagment = () => {
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
            <h2 className="text-left">Operation Managment</h2>
            <hr style={{ width: "15%" ,height:"3px" ,color:'#008772' ,opacity:1 }}></hr>
            <p className="col-12 " style={{textAlign:'justify'}}>
              {" "}
              The objectives of the Airline Operations Management are to fulfil
              airline operational needs by forecasting future schedule required
              flights and find an optimum solution to operate fleet achieving
              maximum performance with available resources which will lead
              executives officers in the field of airline operations to
              implement creative innovative management strategies and more
              effective business models.
            </p>
            <Link
              to="/operration-demo"
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

export default OperationManagment;

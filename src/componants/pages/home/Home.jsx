import React from "react";
import MovingComponent from "react-moving-text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./home.css";
import { FaWrench, FaBusinessTime, FaCoins } from "react-icons/fa";
import Slider from "./Slider";

const pbrack = {
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  display: "-webkit-box",
  whiteSpace: "normal",
  overflow: "hidden",
};

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Slider></Slider>
      <div className="container">
        <div className="row align-items-center justify-content-center pt-3 pb-5">
          <div className="col-11 col-md-8 pt-5 pb-5">
            <motion.h1 className="h3"
              initial={{ y: "-150%", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 1,
                repeatDelay: 1,
                delay: 0,
              }}
            >
              You dream we design
            </motion.h1>
            <hr
              style={{
                width: "15%",
                height: "3px",
                color: "#008772",
                opacity: 1,
              }}
            ></hr>
            <motion.p
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{
                duration: 2,
                repeatDelay: 1,
                delay: 1,
              }}
              className="col-12 col-md-11"
              style={{ textAlign: "justify" }}
            >
              Air Transport market must continuously innovate to secure its
              market position through improving its operation management, cost
              operations, financial viability and strategic planning.
            </motion.p>

            <motion.p
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{
                duration: 2,
                repeatDelay: 1,
                delay: 2,
              }}
              className="col-12 col-md-11"
              style={{ textAlign: "justify" }}
            >
              Our highly experienced consultants in Operations Management ready
              to help airlines face increasing challenges by designing and
              implementing scientific decision-making systems that enhance
              organization profits and increase its market share.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              delay: 4,
            }}
            className="col-11 col-md-4 p-4"

            id="contact"
            style={{ backgroundColor: "black" }}
          >
            <h5 className="text-white">Start your Xperience</h5>
            <p
              style={{ fontSize: "16px", color: "#e9ecef" }}
              className="fw-lighter"
            >
              Leave your name and contact number and we will get in touch with
              you
            </p>
            <div
              className="row"
              style={{ border: "1px solid gray", margin: "0" }}
            >
              <input
                type="text"
                placeholder="Name"
                className="form-control col"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              />
            </div>
            <div
              className="row mt-3"
              style={{ border: "1px solid gray", margin: "0" }}
            >
              <input
                type="number"
                placeholder="Phone"
                className="form-control col"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              />
            </div>
            <div
              className="row mt-3"
              style={{ border: "1px solid gray", margin: "0" }}
            >
              <input
                type="email"
                placeholder="Email"
                className="form-control col"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
              />
            </div>
            <div className="row mt-3" style={{ margin: "0" }}>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#01715e", color: "white" }}
              >
                CONTACT US
              </a>
            </div>
          </motion.div>
        </div>
        <div className="row text-center">
          <h2>OUR SERVICES</h2>
          <hr
            style={{
              width: "15%",
              margin: "auto",
              height: "3px",
              color: "#008772",
              opacity: 1,
            }}
          ></hr>
        </div>
        <div className="row mt-3 justify-content-center  mb-5">
          <div className="col-11 col-md-4 m-0 me-md-2 p-4 service">
            <FaBusinessTime
              style={{ color: "white", fontSize: "5rem" }}
            ></FaBusinessTime>
            <h5 className="mt-3">Operation Management.</h5>
            <p style={pbrack}>
              The objectives of the Airline Operations Management are to fulfil
              airline operational needs by forecasting future schedule required
              flights and find an optimum solution to operate fleet achieving
              maximum performance with available resources which will lead
              executives officers in the field of airline operations to
              implement creative innovative management strategies and more
              effective business models.
            </p>
            <Link
              to="/operation-Managment"
              className="btn"
              style={{ backgroundColor: "#01715e", color: "white" }}
            >
              {" "}
              READ MORE{" "}
            </Link>
          </div>
          <div className="col-11 col-md mt-3 mt-md-0 ms-md-1 p-4 service">
            <FaWrench style={{ color: "white", fontSize: "5rem" }}></FaWrench>
            <h5 className="mt-3">Maintenace Management.</h5>

            <p style={pbrack}>
              The goal of maintenance management is to provide a safe, reliable,
              and airworthy aircraft. Our aircraft maintenance customized
              programs provides innovative monitoring and managing of scheduled
              maintenance and preventive maintenance to the ensure reliability,
              accuracy of maintenance activities implementation.
            </p>
            <Link
              to="/maintenace-management"
              className="btn"
              style={{ backgroundColor: "#01715e", color: "white" }}
            >
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
            <Link
              to="/budget-management"
              className="btn"
              style={{ backgroundColor: "#01715e", color: "white" }}
            >
              {" "}
              READ MORE{" "}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

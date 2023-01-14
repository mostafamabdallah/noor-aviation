import React from "react";
import { motion } from "framer-motion";
import dashboard from "../../../imgs/PngItem_429042.png";
import image from "../../../imgs/airplane-travelling-around-earth.png";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
} from "react-icons/fa";

import LineChary from "../../charts/LineChary";
import PieChart from "../../charts/PieChart";
import BarChart from "../../charts/BarChart";

const inService = { name: "In Service", quantity: 20, color: "green" };

const OperrationDemo = () => {
  return (
    <motion.section
      style={{ backgroundColor: "#161d31", minHeight: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container demo">
        <div className="row justify-content-center pt-4">
          <div
            className="col-11 col-md-12 p-3"
            style={{ borderRadius: "0.5rem", backgroundColor: "#283046" }}
          >
            <select
              className="form-control text-white"
              style={{ backgroundColor: "#283046" }}
            >
              <option value="-1" defaultValue disabled hidden>
                Please select your airplane
              </option>
              <option value="1">A320</option>
              <option value="2">A380</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div
            className="col-11 col-md-4 p-3 "
            style={{
              borderRadius: "0.5rem",
              backgroundColor: "#283046",
              boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
            }}
          >
            <h6 className="text-white" style={{ fontWeight: "100" }}>
              Image
            </h6>
            <img src={dashboard} width="100%"></img>
          </div>

          <div
            className="col-11 col-md ms-md-4 p-3 mt-4 mt-md-0"
            style={{
              borderRadius: "0.5rem",
              backgroundColor: "#283046",
              boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
            }}
          >
            <h6 className="text-white">Statistcs</h6>
            <div className="row">
              <BarChart></BarChart>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4 justify-content-center">
          <div className="col-11 col-md-12 col-lg-4 mb-4 mb-md-0">
            <div className="row">
              <div
                className="col-12 col-md me-2 p-3"
                style={{
                  borderRadius: "0.5rem",
                  backgroundColor: "#283046",
                  boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
                }}
              >
                <h6 className="text-white" style={{ fontWeight: "100" }}>
                  Flight Hours
                </h6>
                <div className="row align-items-center">
                  <p
                    className="text-white col-6 col-md-12 "
                    style={{ fontWeight: "100" }}
                  >
                    750,00 Hr
                  </p>
                  <div className="col-6 col-md-12" align="center">
                    <img width="60%" src={image} />
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md ms-0 mt-4 mt-md-0 ms-md-2 p-3"
                style={{
                  borderRadius: "0.5rem",
                  backgroundColor: "#283046",
                  boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
                }}
              >
                <h6 className="text-white" style={{ fontWeight: "100" }}>
                  Serviceability
                </h6>

                <div className="row align-items-center">
                  <p
                    className="text-white col-6 col-md-12"
                    style={{ fontWeight: "100" }}
                  >
                    80%
                  </p>
                  <FaArrowAltCircleUp
                    className="col-6 col-md-12"
                    style={{ color: "#20c997", fontSize: "80px" }}
                  ></FaArrowAltCircleUp>
                </div>
              </div>
            </div>

            <div
              className="row mt-4 p-3 align-items-center"
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "#283046",
                boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
              }}
            >
              <div className="col-6">
                <h6 className="text-white" style={{ fontWeight: "100" }}>
                  Serviceability
                </h6>
                <h5 className="text-white" style={{ fontWeight: "100" }}>
                  80%
                </h5>
              </div>
              <div className="col-6">
                <div>
                  <PieChart data={inService}></PieChart>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-md ms-0 ms-lg-4 p-3"
            style={{
              borderRadius: "0.5rem",
              backgroundColor: "#283046",
              boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
            }}
          >
            <LineChary></LineChary>
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-11 col-md p-0 me-0 me-md-4"
            style={{
              backgroundColor: "#283046",
              boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
              borderRadius: "0.5rem",
            }}
          >
            <div
              className="scroll-table"
              style={{
                borderRadius: "0.5rem",
              }}
            >
              <table className="myTable">
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Status</th>
                    <th>Total hours</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">5567</th>
                    <td>
                      <FaArrowAltCircleUp
                        style={{ color: "#28c76f", fontSize: "20px" }}
                      />{" "}
                      Ready
                    </td>
                    <td>650</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">6547</th>
                    <td>
                      <FaArrowAltCircleRight
                        style={{ color: "#ff9f43", fontSize: "20px" }}
                      />{" "}
                      Overall
                    </td>
                    <td>540</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">6354</th>
                    <td>
                      <FaArrowAltCircleUp
                        style={{ color: "#28c76f", fontSize: "20px" }}
                      />{" "}
                      Ready
                    </td>
                    <td>220</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">6354</th>
                    <td>
                      <FaArrowAltCircleDown
                        style={{ color: "#e63233", fontSize: "20px" }}
                      />{" "}
                      Out of service
                    </td>
                    <td>650</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="col-11 col-md-4 p-3"
            style={{
              backgroundColor: "#283046",
              boxShadow: "0 4px 24px 0 rgb(34 41 47 / 24%)",
              borderRadius: "0.5rem",
            }}
          >
            <h6 className="text-white" style={{ fontWeight: "100" }}>
              Goal Overview
            </h6>
            <div className="row justify-content-center"> 
            <div className="col-8 col-md-8">
              <PieChart data={inService}></PieChart>
            </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OperrationDemo;

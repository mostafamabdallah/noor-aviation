import React, { useState } from "react";
import CustomizedTables from "../../Table";
import Loading from "../../Loading";

import { motion } from "framer-motion";

const BudgetDemo = () => {
  const [loading, setLoading] = useState(0);
  const [disable, setDisable] = useState({ text: "Run", value: false });
  const handleClick = (e) => {
    setLoading(1);
    setDisable({ text: "Loading...", value: true });
    setTimeout(() => {
      setLoading(2);
      setDisable({ text: "Run", value: false });
    }, 3000);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h3 className="text-center mt-4">Budget Management</h3>
        <div className="row justify-content-center mt-4">
          <div
            className="col-11 col-md-6 p-4 bg-black"
            style={{ borderRadius: "5px" }}
          >
            <div className="row">
              <div className="col-6">
                <label type="number">Interval In Days</label>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="number"
                  value="356"
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <label type="number">Flight Hours</label>
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="number"
                  value={50}
                ></input>
              </div>
            </div>

            <div className="row justify-content-center mt-4">
              <button
                disabled={disable.value}
                onClick={handleClick}
                className="btn col-6 col-md-4 col-lg-3"
                style={{ backgroundColor: "#01715e", color: "white" }}
              >
                {disable.text}
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-11 col-md-12">
            {loading == 1 ? (
              <Loading></Loading>
            ) : loading == 0 ? (
              <div></div>
            ) : (
              <CustomizedTables></CustomizedTables>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BudgetDemo;

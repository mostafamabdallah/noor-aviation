import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const option = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const LineChary = () => {
  return (
    <div>
      <Line
        height="150"
        respo
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April ",
            "May ",
            "June",
            "July ",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "5461",
              data: [
                "50",
                "70",
                "40",
                "60",
                "60",
                "40 ",
                "50",
                "70",
                "65",
                "30",
                "50",
                "40",
              ],
              backgroundColor: "#20c997",
              borderColor: "#20c997",
            },
            {
              label: "5461",
              data: [
                "60",
                "50",
                "60",
                "20",
                "40",
                "60 ",
                "50",
                "30",
                "70",
                "60",
                "20",
                "60",
              ],
              backgroundColor: "#7367f0",
              borderColor: "#7367f0",
            },
            {
              label: "5461",
              data: [
                "10",
                "60",
                "40",
                "30",
                "50",
                "35 ",
                "20",
                "60",
                "50",
                "20",
                "40",
                "50",
              ],
              backgroundColor: "#ea5455",
              borderColor: "#ea5455",
            },
            {
              label: "5461",
              data: [
                "25",
                "40",
                "60",
                "35",
                "45",
                "25 ",
                "25",
                "60",
                "32",
                "25",
                "50",
                "10",
              ],
              backgroundColor: "#ff9f43",
              borderColor: "#ff9f43",
            },
          ],
        }}
        options={option}
      />
    </div>
  );
};

export default LineChary;

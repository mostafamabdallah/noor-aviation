import React from "react";
import { Bar } from "react-chartjs-2";
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
const BarChart = () => {
  return (
    <div>
      <Bar
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
              label: "Total Hours",
              data: [
                "500",
                "700",
                "400",
                "600",
                "500",
                "400 ",
                "500",
                "700",
                "650",
                "300",
                "500",
                "400",
              ],
              backgroundColor: [
                "#20c997",
                "#7367f0",
                "#ea5455",
                "#ff9f43",
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgba(255, 205, 86)",
                "rgba(75, 192, 192)",
                "rgba(54, 162, 235)",
                "rgba(153, 102, 255)",
                "rgba(201, 203, 207)",
              ],
            },
          ],
        }}
        options={option}
      />
    </div>
  );
};

export default BarChart;

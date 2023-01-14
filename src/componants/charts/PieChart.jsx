import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const PieChart = () => {
  return (
    <div>
      <Doughnut
        width="100"
        height="100"
        data={{
          labels: ["In service", "Out service","Overhaul"],
          datasets: [
            {
              label: "# of Votes",
              data: [50, 20,30],
              backgroundColor: ["#20c997", "#ea5455",'#ff9f43'],
              borderColor: ["#20c997", "#ea5455",'#ff9f43'],
              borderWidth: 0.5,
            },
          ],
        }}
      ></Doughnut>
    </div>
  );
};

export default PieChart;

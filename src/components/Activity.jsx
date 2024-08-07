import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement);

const Activity = () => {
  // Data and options for the chart
  const data = {
    labels: [
      "5",
      "",
      "",
      "9",
      "",
      "",
      "11",
      "",
      "",
      "13",
      "",
      "",
      "15",
      "",
      "",
      "17",
      "",
      "",
      "19",
      "",
      "",
      "21",
      "",
      "",
      "23",
      "",
      "",
      "25",
      "",
      "",
      "27",
    ],
    datasets: [
      {
        data: [
          12000, 1000, 3000, 6000, 6000, 8000, 12000, 10000, 3000, 2000, 4000,
          11000, 6000, 6000, 8000, 12000, 12000, 10000, 3000, 2000, 4000, 1000,
          8000, 12000, 10000, 3000, 2000, 4000, 11000, 6000, 8000,
        ],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 10, // Uniformly rounded corners
        borderSkipped: false,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom height and width
    plugins: {
      // legend: {
      //   position: 'top',
      // },
      // title: {
      //   display: true,
      //   text: 'Sales Data',
      // },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, ticks) {
            // Format the ticks to display values in 'k' format
            return value === 0 ? "0" : value / 1000 + "k";
          },
          color: '#FFFFFF',
          stepSize: 5000, // Step size for each tick
          padding: 10,
        },
        suggestedMax: 15000, // Maximum value suggested for the y-axis
        grid: {
          display: true, // Display horizontal grid lines
          color: "rgba(200, 200, 200, 0.3)", // Color of grid lines
          // borderDash: [5, 5], // Dashed lines [line length, gap length]
        },
      },
      x: {
        ticks: {
          color: '#FFFFFF',
        }
      }
    },
  };

  return (
    <div className="flex flex-col bg-n1 rounded-[4px] w-full p-3 gap-2">
      <div className="w-full flex items-center justify-between">
        <span className="text-lg font-semibold">Activity</span>
        <select className="bg-[#696969] py-1 px-3 rounded-full w-[6.5rem] border-transparent text-md">
          <option value="" selected>
            Weekly
          </option>
          <option value="">Monthly</option>
          <option value="">Yearly</option>
        </select>
      </div>
      <div style={{ position: "relative", width: "100%", height: "150px" }}>
        <Bar data={data} options={options} height={300} width={500} />
      </div>
    </div>
  );
};

export default Activity;

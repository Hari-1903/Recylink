import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import csv from "csvtojson";
import UserNav from "@/components/UserNav"; // Replace with the correct path to UserNav

Chart.register(...registerables);

const StackedBarChart: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/state_wise_analysis.csv");
        const csvData = await response.text();

        // Parse CSV data
        const data = await csv().fromString(csvData);

        // Extract labels and datasets from the loaded data
        const labels = data.map((entry) => entry.State);
        const datasets = [
          {
            label: "Treated",
            data: data.map((entry) => parseInt(entry.Treated)),
            backgroundColor: "rgb(167, 114, 79)",
          },
          {
            label: "Untreated",
            data: data.map((entry) => parseFloat(entry.Untreated)),
            backgroundColor: "rgb(150, 224, 114)",
          },
        ];

        // Create a new chart instance
        const canvas = document.getElementById(
          "StackedBarChart"
        ) as HTMLCanvasElement;

        if (chartRef.current instanceof Chart) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(canvas, {
          type: "bar",
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: {
            plugins: {
              title: {},
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                beginAtZero: true,
                stacked: true,
              },
            },
          },
        });
      } catch (error) {
        console.error("Error loading CSV file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-[19vw_80vw] h-screen w-screen overflow-none">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav">
        <UserNav />
      </div>
      <div className="m-3 py-3 px-5 rounded-xl relative shadow-content">
        <div>
          <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize">
            Treated Wastes vs Untreated Wastes - Stacked Bar-Chart
          </h1>
          <div className="w-[1100px] h-screen flex mx-auto my-auto">
            <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
              <canvas id="StackedBarChart"></canvas>
            </div>
          </div>
          <p>
            Annual Report 2020-21 on Implementation of Solid Waste Management
            Rules, 2016
          </p>
          <div>Pie Chart</div>
          <div>Bubble Chart</div>
        </div>
      </div>
    </div>
  );
};

export default StackedBarChart;

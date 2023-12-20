import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import csv from "csvtojson";
import UserNav from "@/components/UserNav";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

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
            backgroundColor: "#3E8914",
          },
          {
            label: "Untreated",
            data: data.map((entry) => parseFloat(entry.Untreated)),
            backgroundColor: "#F83131",
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
    <div className="grid md:grid-cols-[19vw_80vw] h-screen w-screen overflow-none">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav hidden md:block" id='nav'>
        <UserNav />
      </div>
      <div className="m-3 py-3 px-5 rounded-xl relative bg-[rgba(255,255,255,0.75)] shadow-content">
        <Image src="/assets/images/data_bg.png" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image(Garbage Truck)"/>
        <div>
          <p className="text-2xl font-bold capitalize p-4 flex-center">
            Treated Wastes vs Untreated Wastes - Stacked Bar-Chart
          </p>
          <div className="flex-center p-3">
            <div className="border border-gray-400 bg-white pt-0 rounded-xl w-full h-fit my-auto shadow-xl hover:scale-105 transition-all duration-500 ease-in-out">
              <canvas id="StackedBarChart"></canvas>
            </div>
          </div>
        </div>
        <p className="absolute bottom-0 right-0 p-3 text-xs font-semibold">
            Annual Report 2020-21 on Implementation of Solid Waste Management
            Rules, 2016
        </p>
      </div>
      <MobileNav/>
    </div>
  );
};

export default StackedBarChart;

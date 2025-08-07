import React, { useState } from "react";
import Papa from "papaparse";
import Chart from "react-apexcharts";
import Header from "./components/Header";

export default function UploadChartApp() {
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState("line");

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      Papa.parse(target.result, {
        complete: (results) => processCSV(results.data),
        header: true,
        dynamicTyping: true,
      });
    };
    reader.readAsText(file);
  };

  const processCSV = (data) => {
    const categories = [];
    const series = {};
    let maxElapsedTime = 0;

    data.forEach((row) => {
      if (row.Elapsed !== undefined) {
        const elapsedTime = parseFloat(row.Elapsed);
        categories.push(elapsedTime);
        if (elapsedTime > maxElapsedTime) maxElapsedTime = elapsedTime;
        Object.keys(row).forEach((key) => {
          if (key !== "Elapsed" && row[key] !== null) {
            if (!series[key]) series[key] = [];
            series[key].push(row[key]);
          }
        });
      }
    });
    const intervalTicks = [];
    for (let i = 0; i <= maxElapsedTime; i += 30) {
      intervalTicks.push(i);
    }

    setChartData({
      options: {
        xaxis: {
          categories,
          title: {
            text: "Elapsed Time",
          },
          tickAmount: intervalTicks.length - 1,
          labels: {
            formatter: (value) => formatTime(value),
          },
        },
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
          },
          toolbar: { show: true },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        markers: {
          size: 0,
        },
      },
      series: Object.keys(series).map((key) => ({ name: key, data: series[key], color: generateRandomColor() })),
    });
  };

  return (
    <div className="container">
      <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Header />
        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg mx-8">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <select
            onChange={(e) => setChartType(e.target.value)}
            value={chartType}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="area">Area</option>
            <option value="scatter">Scatter</option>
          </select>
          {chartData && (
            <div className="border border-gray-300 rounded-lg p-4 bg-white shadow flex justify-center">
              <Chart options={chartData.options} series={chartData.series} type={chartType} height={500} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

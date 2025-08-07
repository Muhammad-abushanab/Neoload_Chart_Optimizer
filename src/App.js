import React, { useState } from "react";
import Papa from "papaparse";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FileUploadCard from "./components/FileUploadCard";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UploadChartApp() {
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState("line");
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState("");

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

    setFileName(file.name);
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      Papa.parse(target.result, {
        complete: (results) => {
          processCSV(results.data);
          setIsProcessing(false);
        },
        header: true,
        dynamicTyping: true,
        error: () => {
          setIsProcessing(false);
        }
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
          toolbar: { 
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true
            }
          },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        markers: {
          size: 0,
        },
      },
      series: Object.keys(series).map((key) => ({ 
        name: key, 
        data: series[key], 
        color: generateRandomColor() 
      })),
    });
  };

  return (
    <div className="bg-light min-vh-100" style={{backgroundImage:'url(/images/gradient_hero.jpg)'}}>
      {/* <Header /> */}
      <HeroSection /> 
      <Container className="my-5" >
        <FileUploadCard 
          handleFileUpload={handleFileUpload}
          fileName={fileName}
          chartType={chartType}
          setChartType={setChartType}
          isProcessing={isProcessing}
          chartData={chartData}
        />
        <FeaturesSection />
      </Container>
      <Footer />
    </div>
  );
}
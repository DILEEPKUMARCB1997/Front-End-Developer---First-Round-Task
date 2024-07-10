import React from "react";
import ReactApexChart from "react-apexcharts";

function Dashboard() {
  const lineSeries = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const lineOptions = {
    chart: {
      height: 400,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
  };

  const barSeries = [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ];

  const barOptions = {
    chart: {
      height: 400,
      type: "bar",
    },
  };

  const donutSeries = [44, 55, 13, 33];
  const donutOptions = {
    chart: {
      width: 250,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
  };
  return (
    <div className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <h3>Card 1</h3>
        </div>
        <div className="card">
          <h3>Card 2</h3>
        </div>
        <div className="card">
          <h3>Card 3</h3>
        </div>
        <div className="card">
          <h3>Card 4</h3>
        </div>
      </div>

      <div className="charts">
        <ReactApexChart
          series={lineSeries}
          options={lineOptions}
          type="line"
          width={350}
          height={300}
        />
        <ReactApexChart
          series={barSeries}
          options={barOptions}
          type="bar"
          width={350}
          height={300}
        />
        <ReactApexChart
          series={donutSeries}
          options={donutOptions}
          type="donut"
          width={350}
          height={300}
        />
      </div>
    </div>
  );
}

export default Dashboard;

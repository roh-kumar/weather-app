import React from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  return (
    <div className="chart">
      <br />
      <div
        className="chart-temp container"
        style={{ backgroundColor: "#a4c5c6" }}
      >
        <Line
          data={props.chartDataTemp}
          options={{
            title: {
              display: true,
              text: "Temperature variation (Past 7 Days)",
              fontSize: 20,
              fontColor: "#fff",
            },
            legend: {
              display: true,
              labels: {
                fontColor: "#fff",
              },
            },
          }}
        />
      </div>
      <br />
      <div
        className="chart-humi container"
        style={{ backgroundColor: "#f8c687" }}
      >
        <Line
          data={props.chartDataHumi}
          options={{
            title: {
              display: true,
              text: "Humidity variation (Past 7 Days)",
              fontSize: 20,
              fontColor: "#fff",
            },
            legend: {
              display: true,
              labels: {
                fontColor: "#fff",
              },
            },
          }}
        />
      </div>
      <br />
      <div
        className="chart-preci container"
        style={{ backgroundColor: "#ffbaba" }}
      >
        <Line
          data={props.chartDataPreci}
          options={{
            title: {
              display: true,
              text: "Precipitation variation (Past 7 Days)",
              fontSize: 20,
              fontColor: "#fff",
            },
            legend: {
              display: true,
              labels: {
                fontColor: "#fff",
              },
            },
          }}
        />
      </div>
      <br />
    </div>
  );
};

export default Chart;

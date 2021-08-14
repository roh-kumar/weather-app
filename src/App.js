import React from "react";
import "./App.css";
import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import Chart from "./components/chart";
import * as ReactBootStrap from "react-bootstrap";

const api = {
  key: "bff03f6366c448f6a45ab086a4bb1dcb",
  base: "https://api.weatherbit.io/v2.0/",
  key_h: "36be3575fe1b454883a153458211408",
  base_h: "https://api.worldweatheronline.com/premium/v1/",
};

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humi: undefined,
    preci: undefined,
    desc: undefined,
    loading: false,
    sunset_ts: undefined,
    forecast_date: [],
    forecast_temp: [],
    forecast_humi: [],
    forecast_preci: [],
    chartDataTemp: {},
    chartDataHumi: {},
    chartDataPreci: {},
  };

  search = async (e) => {
    const city = e.target.elements.city.value;
    this.setState({
      loading: true,
      city: undefined,
    });
    e.preventDefault();

    if (city) {
      const forecast_api_call = await fetch(
        `${api.base}forecast/daily?city=${city}&days=4&key=${api.key}`
      );
      const forecast_res = await forecast_api_call.json();

      console.log(forecast_res);

      let forecast_date = [];
      let forecast_temp = [];
      let forecast_humi = [];
      let forecast_preci = [];
      let count = 0;

      while (count <= 3) {
        forecast_date.push(forecast_res.data[count].valid_date);
        forecast_temp.push(forecast_res.data[count].temp);
        forecast_humi.push(forecast_res.data[count].rh);
        forecast_preci.push(forecast_res.data[count].precip);
        count++;
      }

      let days = 7;
      let temp = [];
      let humi = [];
      let preci = [];
      let date_record = [];
      while (days >= 1) {
        let date = new Date();
        let last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
        let day = last.getDate();
        let month = last.getMonth() + 1;
        let year = last.getFullYear();
        let back_date = year + "-" + month + "-" + day;

        date_record.push(back_date);

        let history_api_call = await fetch(
          `${api.base_h}past-weather.ashx?q=${city}&date=${back_date}&format=json&key=${api.key_h}`
        );
        let result = await history_api_call.json();

        console.log(result);

        temp.push(result.data.weather[0].hourly[0].tempC);
        humi.push(result.data.weather[0].hourly[0].humidity);
        preci.push(result.data.weather[0].hourly[0].precipMM);
        days--;
      }

      this.setState({
        city: forecast_res.city_name,
        country: forecast_res.country_code,
        sunset_ts: forecast_res.data[0].sunset_ts,
        desc: forecast_res.data[0].weather.description,
        forecast_date: forecast_date,
        forecast_temp: forecast_temp,
        forecast_humi: forecast_humi,
        forecast_preci: forecast_preci,
        loading: false,

        chartDataTemp: {
          labels: date_record,
          datasets: [
            {
              label: "Temperature (º C)",
              data: temp,
              borderColor: "#ff0000",
            },
          ],
        },

        chartDataHumi: {
          labels: date_record,
          datasets: [
            {
              label: "Humidity (%)",
              data: humi,
              borderColor: "#0000ff",
            },
          ],
        },

        chartDataPreci: {
          labels: date_record,
          datasets: [
            {
              label: "Precipitation (mm)",
              data: preci,
              borderColor: "#008000",
            },
          ],
        },
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Title />
        <Form loadSearch={this.search} />
        {this.state.loading && (
          <ReactBootStrap.Spinner
            animation="border"
            variant="secondary"
            className="spinner"
          />
        )}
        {this.state.city && (
          <Weather
            desc={this.state.desc}
            temp={this.state.temp}
            city={this.state.city}
            sunset_ts={this.state.sunset_ts}
            country={this.state.country}
            humi={this.state.humi}
            preci={this.state.preci}
            forecast_date={this.state.forecast_date}
            forecast_temp={this.state.forecast_temp}
            forecast_humi={this.state.forecast_humi}
            forecast_preci={this.state.forecast_preci}
            chartDataTemp={this.state.chartDataTemp}
            chartDataHumi={this.state.chartDataHumi}
            chartDataPreci={this.state.chartDataPreci}
          />
        )}

        {this.state.city && (
          <Chart
            city={this.state.city}
            chartDataTemp={this.state.chartDataTemp}
            chartDataHumi={this.state.chartDataHumi}
            chartDataPreci={this.state.chartDataPreci}
          />
        )}
      </div>
    );
  }
}

export default App;

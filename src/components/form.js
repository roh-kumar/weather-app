import React from "react";
import "./weather.css";

const Form = (props) => {
  return (
    <form
      onSubmit={props.loadSearch}
      className="container"
      style={{ border: "1px solid #ccc" }}
    >
      <div className="row">
        <div className="col" style={{ padding: "0" }}>
          <input
            type="text"
            name="city"
            className="form-control"
            style={{ border: "0px solid", height: "100%", textAlign: "left" }}
            placeholder="Enter city..."
          />
        </div>

        <button
          className="btn btn-outline-light btn-lg"
          style={{ color: "gray" }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Form;

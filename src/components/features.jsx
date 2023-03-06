import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Produto</h2>
        </div>
        <div className="feature-container">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="feature-size">
                {" "}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

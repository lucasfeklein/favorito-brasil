import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Conheça o time</h2>
          <p>
            A Favorito Brasil é uma empresa composta por apenas duas pessoas que estão empenhadas no constate aprimoramento do negócio.
          </p>
        </div>
        <div id="row" className="center-images">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="team">
                <div className="thumbnail">
                  {" "}
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

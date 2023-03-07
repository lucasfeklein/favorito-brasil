import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Área de Atuação</h2>
          <p>A Favorito Brasil possui um depósito localizado em Guarulhos (SP). Com essa estrutura logística, a empresa é capaz de distribuir seus produtos em todo Brasil com rapidez e eficiência. <span className="bold-text">Buscamos parceiros em todas as regiões do Brasil.</span></p>
          <a href="#contact">Entre em contato conosco e atenda a sua região!</a>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="../../img/map-favorito.jpg" alt="mapa atuação fermento favorito brasil" style={{ width: "400px" }} />
        </div>

        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    {" "}
                    <img src={d.img} alt="" />{" "}
                  </div>
                  <div className="testimonial-content">
                    <p>"{d.text}"</p>
                    <div className="testimonial-meta"> - {d.name} </div>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};

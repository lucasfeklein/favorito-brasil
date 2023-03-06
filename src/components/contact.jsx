import emailjs from "emailjs-com";
import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  cnpj: "",
  empresa: ""
};
export const Contact = (props) => {
  const [{ name, email, message, cnpj, phone }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, cnpj, phone);
    emailjs
      .sendForm("service_kcvyuka", "template_pynxes6", e.target, "sgRvoeriyKLEu79x-")
      .then(
        (result) => {
          alert('Mensagem enviada com sucesso!')
          clearState()
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Entre em contato</h2>
                <p>
                  Por favor preencha o formulário abaixo e entraremos em contato assim que possível.
                </p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        className="form-control"
                        placeholder="CNPJ (opcional)"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Telefone (opcional)"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações para contato</h3>
              <span>
                <span className="bold-text">
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                <p className="contact-info">Rua Dr. Nereu Ramos, 64 Sala 11</p>
                <p className="contact-info">Bairro Centro</p>
                <p className="contact-info">Itajaí - SC</p>
                <p className="contact-info">CEP: 88301-215</p>
              </span>
            </div>
            <div className="contact-item">
              <span>
                <span className="bold-text">
                  <i className="fa fa-phone"></i> Telefone
                </span>{" "}
                <p className="contact-info">+55 (51) 3342-0475 - Fixo</p>
                <p className="contact-info">+55 (51) 9 9269-7105 - Claro</p>
              </span>
            </div>
            <div className="contact-item">
              <span>
                <span className="bold-text">
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <p className="contact-info">favorito@favoritobrasil.com.br</p>
                <p className="contact-info">ricardo@favoritobrasil.com.br</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

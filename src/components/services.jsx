import React from "react";
import { data, data1, data2, data3 } from "../data/receitas";
import Table from "./Table";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Receitas</h2>
          <p>
            Algumas opções de receitas deliciosas para você!
          </p>
        </div>
        <div className="recipe-container">
          <div className="recipe">
            <h3>Pão Doce</h3>
            <img src="../img/paes/pao-doce.jpg" className="pao" alt="pao doce" />
            <Table data={data} />
            <h3>MODO DE PREPARO:</h3>
            <div className="prepare-container">
              <p>1- Misturar o Fermento Favorito à farinha.</p>
              <p>2- Levar os demais ingrediente para a masseira e misturar bem, até que a massa se apresente lisa e enxuta.</p>
              <p>3- Deixar a massa descansar em bloco, por 30 minutos.</p>
              <p>4- Dividir a massa nos tamanhos desejados, rechear e modelar a gosto.</p>
              <p>5- Colocar em assadeiras apropriadas, meio crescimento pintar com ovos e colocar as coberturas.</p>
              <p>6- Deixar completar o crescimento e levar ao forno em temperatura média (cerca de 170 °C), por aproximadamente 10 á 15 minutos, dependendo do tamanho das unidades.</p>
            </div>
          </div>
          <div className="recipe">
            <h3>Pão Francês</h3>
            <img src="../img/paes/pao-frances.jpg" className="pao" alt="pao frances" />
            <Table data={data1} />
            <h3>MODO DE PREPARO:</h3>
            <div className="prepare-container">
              <p>1- Misturar o Fermento Favorito à farinha.</p>
              <p>2- Misturar os demais ingredientes.</p>
              <p>3- Sove a massa até ficar lisa, amasse e levante, empurrando a massa oara frente com a palma da mão e dobrando-a sobre si mesma.</p>
              <p>4- A massa não deve grudar nas mãos.</p>
              <p>5- Corte pequenas porções de massa.</p>
              <p>6- Cubra a massa e deixe descansar por um período de 30 a 40 minutos.</p>
              <p>7- Modele com o formato desejado e coloque no tabuleiro sem untar.</p>
              <p>8- Deixe crescer por 30 a 40 minutos, corte a superfície dos pães com uma lâmina.</p>
              <p>9- Antes de levar ao forno quente, pincele com água os pães.</p>
              <p>10- Asse no forno, por um período de 20 a 30 minutos, com o forno a 180ºC.</p>
            </div>
          </div>
          <div className="recipe">
            <h3>Pão Caseiro</h3>
            <img src="../img/paes/pao-caseiro.jpg" className="pao" alt="pao caseiro" />
            <Table data={data2} />
            <h3>MODO DE PREPARO:</h3>
            <div className="prepare-container">
              <p>1- Misturar o Fermento Favorito a 800g de farinha.</p>
              <p>2- Bata os demais ingredientes no liquidificador.</p>
              <p>3- Coloque a farinha, já misturada com o fermento, em uma bacia. Faça um buraco no meio e acrescente devagar a mistura batida no liquidificador.</p>
              <p>4- À mão misture bem a massa até começar a soltar. Caso necessário, acrescente mais farinha.</p>
              <p>5- Depois de pronta, tampe com filme, enrole em um cobertor e aguarde dobrar de volume.</p>
              <p>6- Abra a massa e corte em pedaços grandes.</p>
              <p>7- Molde em forma de pão ou no formato que desejar e coloque para assar em forno pré aquecido a 200 graus, por aproximadamente 30 minutos.</p>
            </div>
          </div>
          <div className="recipe">
            <h3>Pão de Hamburguer / Hot Dog</h3>
            <img src="../img/paes/pao-hamburguer.jpg" className="pao" alt="pao hamburguer" />
            <Table data={data3} />
            <h3>MODO DE PREPARO:</h3>
            <div className="prepare-container">
              <p>1- Levar a farinha para a masseira, juntar o fermento e deixe misturar por alguns segundos.</p>
              <p>2- Colocar os demais ingredientes e deixar misturar em baixa velocidade, até homogeneizar bem.</p>
              <p>3- Deixar misturar em velocidade rápida até obter uma massa lisa e enxuta.</p>
              <p>4- Levar a massa para a mesa, dividir no tamanho desejado, modelar em formatos característicos de hamburguer ou hot-dog, arrumar em assadeiras padrão e deixar descansar até o ponto de forno, em torno de 80 minutos, dependendo da temperatura ambiente.</p>
              <p>5- Levar ao forno quente cerca de 180 °C, por 10 a 15 minutos.</p>
            </div>
          </div>
          <div className="recipe">
            <h3>Pão de Forma Fechado</h3>
            <img src="../img/paes/pao-forma.jpg" className="pao" alt="pao forma fechado" />
            <Table data={data3} />
            <h3>MODO DE PREPARO:</h3>
            <div className="prepare-container">
              <p>1- Levar a farinha para a masseira, juntar o fermento e misturar por alguns segundos.</p>
              <p>2- Colocar os demais ingredientes e misturar em baixa velocidade, até homogeneizar bem.</p>
              <p>3- Deixar misturar em velocidade rápida, até obter uma massa lisa e enxuta.</p>
              <p>4- Levar a massa para a mesa. Dividir em unidades de 550 gramas, modelar em bastões e colocar nas formas previamente preparadas.</p>
              <p>5- Deixar em crescimento até atingir um centímetro antes da borda da forma, colocar e fazer o fechamento das formas e levar ao forno em temperatura média de 170 °C, por cerca de 35 a 40 minutos.</p>
              <p>6- Ao retirar do forno, desenforme imediatamente e deixe esfriar.</p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};

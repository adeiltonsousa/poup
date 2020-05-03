import React from "react";
import Slide from "react-reveal/Slide";

import "../Splash.css";
import img_topo from "../../../images/1.jpg";

export default function Um(props) {
  return (
    <>
      <article className="splash_um">
        <div className="container">
          <Slide right>
            <img className="splash-ilustracao" src={img_topo} alt="Imagem ilustrativa" />
            <div className="splash-texto">
              Vamos te ensinar sobre o mundo das finanças de forma divertida,
              aqui você vai desenvolver o hábito de poupar
            </div>
            <div className="splash_marcador_botao">
              <span className="splash_marcador">
                <div href="#"className="marcador_item marcador_item--ativo"></div>
                <div href="#" className="marcador_item"></div>
                <div href="#" className="marcador_item"></div>
              </span>

              <span
                className="splash_botao"
                onClick={() => props.mudaSplash("dois")}
              >
                Próxima
              </span>
            </div>
          </Slide>
        </div>
      </article>
    </>
  );
}

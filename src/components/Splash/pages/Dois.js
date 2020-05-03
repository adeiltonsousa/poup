import React from "react";
import Slide from "react-reveal/Slide";

import "../Splash.css";
import img_topo from "../../../images/2.jpg";

export default function Dois(props) {
  return (
    <>
      <article className="splash_dois">
        <div className="container">
          <Slide right>
            <img className="splash-ilustracao" src={img_topo} />
            <div className="splash-texto">
              É mais fácil conquistar seus sonhos quando você aprende a poupar
            </div>
          </Slide>
          <div className="splash_marcador_botao">
            <span className="splash_marcador">
              <a className="marcador_item"></a>
              <a className="marcador_item marcador_item--ativo"></a>
              <a className="marcador_item"></a>
            </span>

            <span
              className="splash_botao"
              onClick={() => props.mudaSplash("tres")}
            >
              <a>Próximo</a>
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

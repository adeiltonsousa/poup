import React from "react";
import Slide from "react-reveal/Slide";

import "../Splash.css";
import img_topo from "../../../images/3.jpg";

export default function Tres(props) {
  return (
    <>
      <article className="splash_tres">
        <div className="container">
          <Slide right>
            <img className="splash-ilustracao" src={img_topo} />
            <div className="splash-texto">
              O mẽs passa rápido, mas tente ter o controle dos seus gastos e
              esteja no topo do ranking
            </div>
          </Slide>
          <div className="splash_marcador_botao">
            <span className="splash_marcador">
              <a className="marcador_item"></a>
              <a className="marcador_item"></a>
              <a className="marcador_item marcador_item--ativo"></a>
            </span>

            <span
              className="splash_botao"
              onClick={() => props.mudaSplash("home")}
            >
              <a>Próximo</a>
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

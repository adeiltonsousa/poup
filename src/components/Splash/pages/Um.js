import React from "react";

import "../Splash.css";
import img_topo from "../../../images/1.jpg";

export default function Um(props) {
  return (
    <>
      <article className="splash_um">
        <div className="container">

          <img className="splash-ilustracao" src={img_topo} />
          <div className="splash-texto">
              Vamos te ensinar sobre o mundo das finanças de forma divertida, aqui
              você vai desenvolver o hábito de poupar
          </div>
        <div className="splash_marcador_botao">

          <span className="splash_marcador">
            <a className="marcador_item marcador_item--ativo"></a>
            <a className="marcador_item"></a>
            <a className="marcador_item"></a>
          </span>

          <span className="splash_botao" onClick={() => props.mudaSplash("dois")}>
            <a >Próximo</a>
          </span>

        </div>
        </div>
      </article>
    </>
  );
}

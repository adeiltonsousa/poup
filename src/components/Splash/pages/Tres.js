import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from 'react-router-dom';

import "../Splash.css";
import img_topo from "../../../images/3.jpg";

export default function Tres(props) {
  return (
    <>
      <article className="splash_tres">
        <div className="container">
          <Slide right>
            <img className="splash-ilustracao" src={img_topo} alt="Imagem ilustrativa"/>
            <div className="splash-texto">
              O mẽs passa rápido, mas tente ter o controle dos seus gastos e
              esteja no topo do ranking
            </div>
          </Slide>
          <div className="splash_marcador_botao">
            <span className="splash_marcador">
              <div className="marcador_item"></div>
              <div className="marcador_item"></div>
              <div className="marcador_item marcador_item--ativo"></div>
            </span>

            <Link
              className="splash_botao"
              to="/login"
              // onClick={() => props.mudaSplash("home")}
            >
              Próximo
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

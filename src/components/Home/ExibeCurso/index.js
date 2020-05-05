import React from "react";

import "./ExibeCurso.css";
import aula1 from "./aula1.mp4";
import icon_up from "./../../../images/icon_up.svg";
import check from "./../../../images/check.svg";
import noCheck from "./../../../images/noCheck.svg";
import Slide from "react-reveal/Slide";

export default function ExibeCurso() {
  const aulas = [
    {
      id_video: "1",
      titulo: "Entendendo seu bolso",
      duracao: "Video - 2 min",
      check: true,
    },
    {
      id_video: "2",
      titulo: "Economia diária",
      duracao: "Video - 5 min",
      check: true,
    },
    {
      id_video: "3",
      titulo: "Identifique maus hábitos",
      duracao: "Video - 8 min",
      check: false,
    },
    {
      id_video: "4",
      titulo: "Entendendo seu bolso 2",
      duracao: "Video - 6 min",
      check: false,
    },
    {
      id_video: "5",
      titulo: "Entendendo seu bolso 3",
      duracao: "Video - 2 min",
      check: false,
    },
    {
      id_video: "6",
      titulo: "Economia diária 2",
      duracao: "Video - 5 min",
      check: false,
    },
    {
      id_video: "7",
      titulo: "Acabe com maus hábitos de consumo 2",
      duracao: "Video - 8 min",
      check: false,
    },
    {
      id_video: "8",
      titulo: "Entendendo seu bolso 4",
      duracao: "Video 6 min",
      check: false,
    },
  ];

  return (
    <>
      <div className="container_exibe_curso">
          <div className="exibe_curso_video">
            <video width="100%" height="100%" controls>
              <source src={aula1} type="video/mp4" />
            </video>
          </div>

          <div className="barra_video">
            <span className="barra_esquerda"></span>
            <span className="barra_direita"></span>
          </div>

          <div className="exibe_curso_informacoes">
            <span className="titulo">
              <p>Planejamento Financeiro</p>
              <img src={icon_up} alt="Icone de notificação" />
            </span>

            <p className="descricao">Entenda o seu Bolso</p>
          </div>

          <span className="exibe_curso_menu">
            <span className="active">Aulas</span>
            <span>Mais</span>
            <span></span>
          </span>

        <Slide right>
          <div className="exibe_curso_lista">
            {aulas.map((data) => (
              <span
                key={data.id_video}
                className={
                  data.check
                    ? "exibe_lista_curso_item"
                    : "exibe_lista_curso_item--inactive"
                  }
              >
                <span className="item_lista_seq">
                  <p>{data.id_video}</p>
                </span>
                <span className="item_lista_marcador">
                  <img
                    src={data.check ? check : noCheck}
                    alt="Icone de Video Check"
                    />
                </span>
                <div>
                  <span className="titulo_lista">
                    <p>{data.titulo}</p>
                  </span>
                  <span className="duracao">
                    <p>{data.duracao}</p>
                  </span>
                </div>
              </span>
            ))}
          </div>
        </Slide>
      </div>
      
    </>
  );
}

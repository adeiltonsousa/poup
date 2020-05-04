import React from "react";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

import "./Home.css";
import MenuBurger from "./Menu";

export default function ListaCursos() {
  const usuario_logado = localStorage.getItem("Nome");

  const listCards = [
    {
      id: 1,
      titulo: "Mini Cursos",
      descricao:
        "Receba o melhor conteúdo preparado exclusivamente para você, com nossos parceiros especialistas",
      cor: "cursos",
      link: "/cursos",
    },
    {
      id: 2,
      titulo: "Meus Gastos",
      descricao:
        "Tenha o controle sobre os seus gastos, com nossas dicas de especialistas",
      cor: "gastos",
      link: "#",
    },
    {
      id: 3,
      titulo: "Trilha do Sucesso",
      descricao:
        "Siga uma trilha de recursos que vão lhe conduzir a ter uma melhor educação financeira",
      cor: "trilha",
      link: "#",
    },
    {
      id: 4,
      titulo: "Meus Gastos",
      descricao:
        "Tenha acesso a recursos que irão facilitar o controle dos seus gastos",
      cor: "poupaqui",
      link: "#",
    },
  ];

  return (
    <>
      <div className="home_cards">
        <MenuBurger />
        <Slide right>
          <div className="container_home">
            <header className="topo_home">
              Seja bem vindo: <strong>{usuario_logado}</strong>
            </header>
            {listCards.map((card) => (
              <Link key={card.id} to={card.link}>
                <span className={`home_cards_item ${card.cor}`}>
                  <p>{card.titulo}</p>
                  <span>{card.descricao}</span>
                </span>
              </Link>
            ))}
          </div>
        </Slide>
      </div>
    </>
  );
}

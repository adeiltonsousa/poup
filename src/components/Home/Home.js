import React from 'react';

import './Home.css';


export default function Home() {

  const usuario_logado = localStorage.getItem('Nome');
  

const listCards = [
  {  
    id: 1,
    titulo : "Mini Cursos",
    descricao : "Receba o melhor conteúdo preparado exclusivamente para você, com nossos parceiros especialistas",
    cor: "cursos"
  },
  {    
    id: 2,
    titulo : "Meus Gastos",
    descricao : "Tenha o controle sobre os seus gastos, com nossas dicas de especialistas",
    cor: "gastos"
  },
  {    
    id: 3,
    titulo : "Trilha do Sucesso",
    descricao : "Siga uma trilha de recursos para vão lhe conduzir a ter uma melhor educação financeira",
    cor: "trilha"
  },
  {    
    id: 4,
    titulo : "Meus Gastos",
    descricao : "Tenha acesso a recursos que irão facilitar o controle dos seus gastos",
    cor: "poupaqui"
  }
]  

  return (
    <>
        <div className="home_cards">
          <div className="container_home">
          <header className="topo_home">
              Seja bem vindo: <strong>{usuario_logado}</strong>
          </header>
          { listCards.map(card => (
            <span className={`home_cards_item ${card.cor}`} key={card.id}>
              <p>{card.titulo}</p>
              <span>
                {card.descricao}
              </span>
            </span>
            ))         
            }
          </div>
        </div>
    </>
  );
}
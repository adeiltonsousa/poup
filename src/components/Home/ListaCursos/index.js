import React from 'react';
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

import cadeado_aberto from './../../../images/cadeado_aberto.svg';
import cadeado_fechado from './../../../images/cadeado_fechado.svg';


import './ListaCursos.css';


export default function ListaCursos() {

// const usuario_logado = localStorage.getItem('Nome');
  
const listCards = [
  {  
    id: 1,
    titulo : "Planejamento Financeiro",
    descricao : "Exclusivo para motoristas de aplicativos",
    progresso: "50% concluído",
    status: true,
  },
  {    
    id: 2,
    titulo : "Segurança Financeira",
    descricao : "Aprenda a investir seu dinheiro",
    progresso: "73% concluído",
    status: true
  },
  {    
    id: 3,
    titulo : "Investimento",
    descricao : "Entenda a mundo do investimento",
    progresso: "",
    status: false
  },
  {    
    id: 4,
    titulo : "Curso Introdutório",
    descricao : "Finanças para todos, de forma fácil e divertida",
    progresso: "",
    status: false
  },
  {    
    id: 5,
    titulo : "Curso Introdutório",
    descricao : "Finanças para todos, de forma fácil e divertida",
    progresso: "10% concluído",
    status: true
  },
  {    
    id: 6,
    titulo : "Curso Introdutório",
    descricao : "Finanças para todos, de forma fácil e divertida",
    progresso: "",
    status: false
  },
  {    
    id: 7,
    titulo : "Curso Introdutório",
    descricao : "Finanças para todos, de forma fácil e divertida",
    progresso: "",
    status: false
  },
  {    
    id: 8,
    titulo : "Curso Introdutório",
    descricao : "Finanças para todos, de forma fácil e divertida",
    progresso: "",
    status: false
  },
  {    
    id: 9,
    titulo : "Curso Introdutório",
    descricao : "Finanças para todos, de forma fácil e divertida",
    progresso: "",
    status: false
  }
]  

  return (
    <>
        <div className="lista_cursos">
            <div className="lista_cursos_topo">
                <Link to="/home"><p> &lt; </p></Link>
                <p> Mini Cursos </p>
            </div>
            {
                listCards.map(curso => (   
                    <Slide right>
                    <Link to="/curso-planejamento">
                        <div className="lista_cursos_item">
                            <div className="lista_cursos_status">
                                <img 
                                src={ curso.status ? cadeado_aberto : cadeado_fechado }
                                alt="Cadeado indicativo de status"/>
                            </div>
                            <div className={curso.status ? "lista_content" : "lista_content--inativo" }>
                                <div className="box_lista">
                                    <span className="box_topo">
                                        <p>{curso.titulo}</p>
                                        <span>{curso.progresso}</span>
                                    </span>
                                    <p>
                                        {curso.descricao}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </Slide>         
                ))
            }    
        </div>
    </>
  );
}
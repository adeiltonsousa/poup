import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import { Link } from 'react-router-dom';


import "./Login.css";
import RedesSociais from "../RedesSociais";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  function salvaDados() {

    localStorage.setItem("Email", email);
    localStorage.setItem("Nome", name);

  }

  return (
    <>
      <div className="login_user">
        <span className="login_container">
          <RedesSociais />
        <Slide right>
          <section className="login_form">
            <form>
                <div>
                  <p>Olá, como podemos lhe chamar:</p>
                  <input value={name} onChange={e => setName(e.target.value)} />
                </div> 
                <div>
                  <p>Informe um Email:</p>
                  <input value={email} onChange={e => setEmail(e.target.value)} />
                </div>                       
            </form>
              <Link
              className="botao_login"
              onClick={() => salvaDados()}
              to="/home"
              >
                Continuar
              </Link>
          </section>
          </Slide>
        </span>
      </div>
    </>
  );
}
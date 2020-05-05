import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./Menu.css";
import icone from "../../../images/icon_menu.svg";
import logo from "../../../images/logo_poup.png";
import marcador from "../../../images/icon_marcador_menu.svg";
import mini_marca from "../../../images/mini_marca.svg";

class MenuBurger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const usuario_logado = localStorage.getItem("Nome");
    const usuario_email = localStorage.getItem("Email");

    return (
      <>
        <span className="icone-menu">
          <img src={icone} alt="Icone de Menu" />
        </span>
        <Menu>
          <div className="content-container-menu">
            <div className="content-header">
              <img src={logo} alt="Logomarca Popu+" />
              <div className="content-usuario-menu">
                <span>{usuario_logado}</span>
                <p>{usuario_email}</p>
              </div>
            </div>

            <div className="content-lista-menu">
              <span className="lista-menu-item">
                <img src={marcador} alt="Icone do menu" />
                <span>Minha conta</span>
              </span>

              <span className="lista-menu-item">
                <img src={marcador} alt="Icone do menu" />
                <span>Meu Rank</span>
              </span>

              <span className="lista-menu-item">
                <img src={marcador} alt="Icone do menu" />
                <span>Minhas metas</span>
              </span>

              <span className="lista-menu-item config-menu">
                <img src={marcador} alt="Icone do menu" />
                <span>Configurações</span>
              </span>

              <span className="lista-menu-item">
                <img src={marcador} alt="Icone do menu" />
                <span>Ajuda</span>
              </span>
            </div>
          <div className="footer-menu">
            <img src={mini_marca} alt="Marca Poup+" />
            <p>Nunca foi tão fãcil e divertido</p>
          </div>
          </div>

        </Menu>
      </>
    );
  }
}

export default MenuBurger;

import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import './Menu.css'
import icone from '../../../images/icon_menu.svg'

class MenuBurger extends React.Component {
    showSettings (event) {
      event.preventDefault();
     
    }
   
    render () {
      return (
          <>
            <span className="icone-menu">
                <Menu>
                    <a id="home" className="menu-item" href="/">Minha Conta</a>
                    <a id="about" className="menu-item" href="/about">Meu Rank</a>
                    <a id="contact" className="menu-item" href="/contact">Minhas Metas</a>
                    <a id="configuracao" className="menu-item" href="/contact">Configuração</a>
                    <a id="ajuda" className="menu-item" href="/ajuda">Ajuda</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="/home">Settings</a>
                </Menu>
                    <img className="icone_menu_svg" src={icone} alt="Icone de Menu"/>
            </span>
          <div className="container-menu">
          </div>
          </>
      );
    }
  }


  export default MenuBurger;
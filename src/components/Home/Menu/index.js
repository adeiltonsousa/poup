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
                    <img src={icone} alt="Icone de Menu"/>
            </span>
          <Menu>
             
          </Menu>
          </>
      );
    }
  }


  export default MenuBurger;
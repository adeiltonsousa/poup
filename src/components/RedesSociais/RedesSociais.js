import React from 'react';
import Slide from "react-reveal/Slide";

import './RedesSociais.css';
import google from './../../images/google.svg';
import aplle from './../../images/aplee.svg';
import facebook from './../../images/facebook.svg';


export default function RedesSociais() {
  return (
    <>
    <div className="redes_sociais">
    <Slide right>
      <div className="link-container">
        <span className="link-redesocial">
          <img src={google} alt="Logomarca do Google" />
        </span>
        <span className="link-redesocial">
          <img src={aplle} alt="Logomarca do Aplle" />
        </span>
        <span className="link-redesocial">
          <img src={facebook} alt="Logomarca do Facebook" />
        </span>
      </div>
      </Slide>
    </div>
        
    </>
  );
}

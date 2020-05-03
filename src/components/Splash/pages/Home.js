import React from 'react';

import "../Splash.css";
import logo from "../../../images/logo.svg";


// onClick={() => props.mudaSplash("quatro")}

export default function Home(props) {

  setTimeout(
    function() {
        props.mudaSplash("um");
    }
    .bind(this),
    2000  
  );

  return (
    <>
        <div className="home">
          <span className="container">
            <img src={ logo } alt="Logomarca Poup+"/>
          </span>
           
        </div> 
    </>
  );
}
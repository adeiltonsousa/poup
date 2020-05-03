import React, { useState } from 'react';

import Um from './pages/Um';
import Dois from './pages/Dois';
import Tres from './pages/Tres';
import Home from './pages/Home';


import './Splash.css';


export default function Splash() {

  const [mostraSplash, setMostraSplash] = useState("home")

  function mudaSplash(item) {
    setMostraSplash(item)
  } 

  return (
     <>
        {mostraSplash === "home" ? ( <Home mudaSplash={mudaSplash} /> ) : false }

        {mostraSplash === "um" ? ( <Um mudaSplash={mudaSplash}/> ) : false }

        {mostraSplash === "dois" ? ( <Dois mudaSplash={mudaSplash} /> ) : false }

        {mostraSplash === "tres" ? ( <Tres mudaSplash={mudaSplash} /> ) : false }

    
     </>
  );
}

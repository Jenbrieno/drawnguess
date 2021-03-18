import React, { useEffect, useRef, useState } from "react";
import './App.css';

function Tools({setTool,setStrokeColor}) {

    function Eraser(){
        
      setTool ('eraser')
    }

    function Palette (){
        setStrokeColor('black')
        setTool ('pen')
    }


    return (
        <div className ='tool-bar' >
    
        <div id='eraser' className="tool" onClick = {Eraser}></div>
        <div id='clear' className="tool" onChange ></div>
        <div id='palette' className="tool" onClick ={Palette}></div>
        <div id='save' className="tool" ></div>

        </div>

    );
}

export default Tools;








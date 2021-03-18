import React from 'react';
import './App.css';




function Colors({setStrokeColor}) {
    
    function setRed(){
        setStrokeColor('red');   
    }

    function setBlue(){
        setStrokeColor('blue');   
    }

    function setGreen(){
        setStrokeColor('green');   
    }

    function setGold(){
        setStrokeColor('gold');   
    }

    function setPurple(){
        setStrokeColor('purple');   
    }

    function setWhite(){
        setStrokeColor('white');   
    }

    

    return (
        <div className ='colors'>
    
        <div id='red' className="color" onClick = {setRed}></div>
        <div id='blue' className="color" onClick = {setBlue}></div>
        <div id='green' className="color" onClick = {setGreen}></div>
        <div id='gold' className="color" onClick = {setGold}></div>
        <div id='purple' className="color" onClick = {setPurple}></div>
        <div id='white' className="color" onClick = {setWhite}></div>
        </div>

    );
}


export default Colors;
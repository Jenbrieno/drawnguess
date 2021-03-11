import React, { useEffect, useRef, useState } from "react";
import pickColors from './Colors';
import './App.css';


function App() {
  const canvasRef = useRef(null);
  const parentRef = React.useRef(null);
  const [context,setContext] = useState({});
  const [drawing, setDrawing] = useState(false);
  const [position, setPosition] = useState ({x:0,y:0});
  const [canvasOffset, setCanvasOffset] = useState ({x:0,y:0});

  useEffect(()=>{
    const canvas = canvasRef.current;  
    const cavctx = canvas.getContext("2d");
    canvas.width = parentRef.current.offsetWidth;
    canvas.height = parentRef.current.offsetHeight;
    cavctx.lineCap = "round";
    cavctx.lineWidth = 2;
    setContext(cavctx);
    let offset = canvas.getBoundingClientRect();
    setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
  },[]);

  function startDrawing(e) {
    setDrawing(true);
    setPosition({ 
      x: parseInt(e.clientX - canvasOffset.x),
      y: parseInt(e.clientY - canvasOffset.y),
    });

  }

  function endDrawing() {
    setDrawing(false);
  }
  
  function isDrawing(e) {
    const mouseX = e.clientX - canvasOffset.x;
    const mouseY = e.clientY - canvasOffset.y;
    if (drawing) {
      context.strokeStyle = 'black';
      context.beginPath();
      context.moveTo(position.x, position.y);
      context.lineTo(mouseX,mouseY);
      context.stroke();
    }
    setPosition({x:mouseX, y:mouseY});
  }


  return (
    <header className='header' ref={parentRef}>
      <pickColors />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={isDrawing}
        ref={canvasRef}
      />


    </header>

  );
}

  

export default App;
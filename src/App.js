import React, { useEffect, useRef, useState } from "react";

function App() {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width  = 500;
    canvas.height = 500; 
    // canvas.width = window.innerWidth ;
    // canvas.height = window.innerHeight *2;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;
    document.getElementById('reset').addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }, false);

    const context = canvas.getContext("2d")
    // context.scale(2, 2);
    context.lineCap = "round";
    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'black', 'white'];
    function listener(i) {
      document.getElementById(colors[i]).addEventListener('click', function() {
        context.strokeStyle = colors[i];
      }, false);
    }
    for(var i = 0; i < colors.length; i++) {
      listener(i);
    }
    context.lineWidth = 5;
    contextRef.current = context;
  },[]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };


  return (
    <div class = "drawing-panel">
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
    </div>
  );
}

  

export default App;
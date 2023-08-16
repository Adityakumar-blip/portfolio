import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

const Mandala = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const draw = (x, y) => {
      if (!isDrawing) return;
      
      context.beginPath();
      context.arc(x, y, 5, 0, Math.PI * 2);
      context.fillStyle = 'black';
      context.fill();
    };

    canvas.addEventListener('mousemove', (event) => {
      const { offsetX, offsetY } = event.nativeEvent;
      draw(offsetX, offsetY);
    });

    canvas.addEventListener('mousedown', () => {
      setIsDrawing(true);
    });

    canvas.addEventListener('mouseup', () => {
      setIsDrawing(false);
    });

    canvas.addEventListener('mouseout', () => {
      setIsDrawing(false);
    });

    return () => {
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mousedown', setIsDrawing);
      canvas.removeEventListener('mouseup', setIsDrawing);
      canvas.removeEventListener('mouseout', setIsDrawing);
    };
  }, [isDrawing]);

  const startMandalaDrawing = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxCircles = 10;
    const circleRadiusStep = 20;
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];

    for (let i = maxCircles; i > 0; i--) {
      const circleRadius = circleRadiusStep * i;
      const colorIndex = i % colors.length;
      context.beginPath();
      context.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
      context.strokeStyle = colors[colorIndex];
      context.lineWidth = 5;
      context.stroke();
    }
  };

  return (
    <div className="App">
      <h1>Automatic Mandala Drawing</h1>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: '1px solid black' }}
      />
      <button onClick={startMandalaDrawing}>Start Mandala</button>
    </div>
  );
};

export default Mandala;

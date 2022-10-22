import React, { useRef, useEffect, useState } from 'react';

let canvas = null;
let context = null;

const Canvas = ({ up, back }) => {
  const canvasRef = useRef(null);
  const [posi, setPosi] = useState(0);
  const prevX = useRef(0);
  const prevY = useRef(0);

  const handleKeyDown = (event) => {
    if (event.key === 'w') {
      setPosi(posi + 5);
    } else if (event.key === 's') {
      setPosi(posi - 5);
    }
  };

  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
    context.fillStyle = '#FFFFFF';
  }, []);

  useEffect(() => {
    if (context) {
      let x = prevX.current;
      let y = prevY.current;
      const isTopRight = x >= 200 && y >= 0 && y < 200;
      const isTopLeft = x >= 0 && x < 200 && y === 0;
      const isBottomRight = x >= 0 && x <= 200 && y >= 200;
      const isBottomLeft = x === 0 && y <= 200 && y >= 0;
      if (isTopLeft) {
        x += 5;
      } else if (isTopRight) {
        y += 5;
      } else if (isBottomLeft) {
        y -= 5;
      } else if (isBottomRight) {
        x -= 5;
      }
      context.clearRect(prevX.current, prevY.current, 100, 100);
      context.fillRect(x, y, 100, 100);
      prevX.current = x;
      prevY.current = y;
    }
  }, [posi]);

  return (
    <canvas
      ref={canvasRef}
      tabIndex="0"
      onKeyDown={(e) => {
        handleKeyDown(e);
      }}
    />
  );
};

export default Canvas;

import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Canvas from './canvas';

const Hello = () => {
  const [up, setW] = useState(0);
  const [back, setBack] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'w') {
      const newW = up + 5;
      console.log('w: ', up, ' newW: ', newW);
      setW(newW);
    } else if (event.key === 's') {
      // setBack(back + 20);
    }
  };

  return (
    <div id="bodyCanvas">
      <Canvas up={up} back={back} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

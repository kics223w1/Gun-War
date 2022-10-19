import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import DoublyLinkedList from 'main/models/doubly-linked-list';
import { useEffect, useState } from 'react';
import Character from './models/character';
const Hello = () => {
  const [s1, setS1] = useState(true);
  const list = new DoublyLinkedList();
  const c1 = new Character(10);
  const c2 = new Character(11);
  const c3 = new Character(12);
  const c4 = new Character(14);
  list.insert(c1);
  console.log('list1: ', list.getAllList());

  list.insert(c2);
  console.log('list2: ', list.getAllList());

  list.insert(c3);
  console.log('list3: ', list.getAllList());

  list.insert(c4);
  console.log('list4: ', list.getAllList());

  useEffect(() => {
    console.log('list: ', list.getAllList());
    console.log('list length: ', list.getLength());
  }, [s1]);

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" onClick={() => setS1(!s1)}>
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          // href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
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

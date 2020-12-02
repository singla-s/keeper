import React from 'react';
import Header from './components/Header';
import singlePi, {doublePi, tripplePi} from './components/Note';
import Footer from './components/Footer';
import "./style.css";

export default function App() {
  return (
    <div>
    <div className="header">
        <h1>{Header}</h1>
    </div>
      <ul>
        <li>{singlePi()}</li>
        <li>{doublePi()}</li>
        <li>{tripplePi()}</li>
      </ul>
      <div className="footerDiv">
        <footer>{Footer}</footer>
      </div>
    </div>
  );
}
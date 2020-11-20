import React from 'react';
import Header from './Header';
import singlePi, {doublePi, tripplePi} from './Note';

export default function App() {
  return (
    <div>
      <h1>{Header}</h1>
      <ul>
        <li>{singlePi()}</li>
        <li>{doublePi()}</li>
        <li>{tripplePi()}</li>
      </ul>
    </div>
  );
}
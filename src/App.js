import React from 'react';
import Pannier from './components/Pannier';
import Navigation from './components/Navigation';
import ListeSouhait from './components/ListeSouhait';

function App() {
  return (
    <div>
      <h1>Extension TEMU</h1>
      <div className="container">
        <Pannier />
        <Navigation />
        <ListeSouhait />
      </div>
    </div>
  );
}

export default App;
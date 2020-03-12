import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Homepage from './views/Homepage';
import Word from './views/Word';
import WordColor from './views/WordColor';

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path = '/'/>
        <Word path = '/:word'/>
        <WordColor path = '/:word/:color/:bg_color'/>
      </Router>
    </div>
  );
}

export default App;

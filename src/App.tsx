import React from 'react';
import About from './components/About';
import Generator from './components/Generator';

import './App.scss';
import wavy_border from './resources/images/wave-border.svg';

const App : React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>dillopass</h1>
        <span>Generate Strong Passwords!</span>
      </header>

      <img className = "wave-border" src = {wavy_border} alt = ""/>

      <div id = "wrapper">
        <Generator />
        <About />
      </div>
      <footer>
        <p>&copy; dillopass 2020</p>
      </footer>
    </div>
  )
}
export default App;

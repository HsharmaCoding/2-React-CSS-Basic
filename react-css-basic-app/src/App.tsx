import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Stylesheet} from './Components/Stylesheet';
import {Inline} from './Components/Inline';
import {StyledComponent} from './Components/StyledComponent';
import '../src/applyStyle.css'
import styles from '../src/applyStyle.module.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Stylesheet primary={true}/>
      <Inline/>
      <StyledComponent/>
      {/* use class from the appStyles.css */}
      <h1 className='error'>Error</h1>
      {/* use class from the appStyles.module.css */}
      <h1 className={styles.success}>Success</h1>
      </header>
    </div>
  );
}
export default App;

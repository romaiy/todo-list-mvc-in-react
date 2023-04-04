import React from 'react';
import Todolist from './Todolist';
import './css/style.css';

function App() {

  return (
    <div className='wrapper'>
      <div className='App'>
        <div style={{paddingTop: '80px'}} className='App__content container'>
          <div className='App__row'>
            <Todolist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

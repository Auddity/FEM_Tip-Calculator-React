import { useReducer } from 'react';
import './css/App.css';
import logo from './images/logo.svg';
import Form from './components/Form.js';
import Display from './components/Display';

function reducer(state, { type, payload }) {
  switch(type) {
    // case :
    //   return ;
    // case : 
    //   return ;
    // case : 
    //   return ;
    // default:
  }
}

function App() {
  const [{ 
    billTotal, people, percentSelected
  }, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Splitter Logo" />
      </header>
      <main>
        <Form 
          billTotal={billTotal}
          people={people} 
          percentSelected={percentSelected}
          dispatch={dispatch} 
        />
        <Display 
          billTotal={billTotal}
          people={people}
        />
      </main>
    </div>
  );
}

export default App;

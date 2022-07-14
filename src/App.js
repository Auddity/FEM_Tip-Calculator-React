import { useReducer } from 'react';
import './css/App.css';
import logo from './images/logo.svg';
import Form from './components/Form.js';
import Display from './components/Display';

export const ACTIONS = {
  BILL: 'bill',
  PEOPLE: 'people',
  SELECTED: 'selected',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
  console.log(payload);
  switch(type) {
    case ACTIONS.BILL:
      return { ...state, billTotal: payload};
    case ACTIONS.PEOPLE: 
      return { ...state, people: payload };
    // case : 
    //   return ;
    default:
  }
}

function App() {
  const [{ 
    billTotal, people, percentSelected
  }, dispatch] = useReducer(reducer, { billTotal: '', people: ''})

  console.log(billTotal, people)
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

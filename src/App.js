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
  switch(type) {
    case ACTIONS.BILL:
      return { ...state, billTotal: payload};
    case ACTIONS.PEOPLE: 
      return { ...state, people: payload };
    case ACTIONS.SELECTED: 
      return { ...state, tipAmount: payload};
    default:
  }
}

function App() {
  const [{ 
    billTotal, people, tipAmount
  }, dispatch] = useReducer(reducer, { billTotal: '', people: '', tipAmount: '' })
  console.log(people, billTotal, tipAmount)
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Splitter Logo" />
      </header>
      <main>
        <Form 
          billTotal={billTotal}
          people={people} 
          tipAmount={tipAmount}
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

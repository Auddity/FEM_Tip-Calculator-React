import { useReducer } from 'react';
import './css/App.css';
import logo from './images/logo.svg';
import Form from './components/Form.js';
import Display from './components/Display';

export const ACTIONS = {
  BILL: 'bill',
  PEOPLE: 'people',
  SELECTED: 'selected',
}

function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.BILL:
      if(ACTIONS.BILL !== '' && ACTIONS.PEOPLE !== '' ) {
        state = { ...state, bill: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount);
      }
      return state;
    case ACTIONS.PEOPLE: 
      if(ACTIONS.BILL !== '' && ACTIONS.PEOPLE !== '' ) {
        state = { ...state, people: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount);
      }
      return state;
    case ACTIONS.SELECTED: 
      if(ACTIONS.BILL !== '' && ACTIONS.PEOPLE !== '') {
        state = { ...state, tipAmount: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount)
      }
      return state;
    default:
  }
}

const evaluate = (state, bill, numPeople, tip) => {
  const tipPerPerson = (+bill * +tip) / +numPeople;
  const totalPerPerson = (+bill * (1 + +tip)) / +numPeople;
  return { ...state, tipPerPerson: tipPerPerson, total: totalPerPerson};
}

function App() {
  const [{ 
    bill, people, tipAmount, total, tipPerPerson
  }, dispatch] = useReducer(reducer, { bill: '', people: '', tipAmount: '', total: '', tipPerPerson: '' })
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Splitter Logo" />
      </header>
      <main>
        <Form 
          bill={bill}
          people={people} 
          tipAmount={tipAmount}
          dispatch={dispatch}
        />
        <Display 
          total={total}
          tipPerPerson={tipPerPerson}
        />
      </main>
    </div>
  );
}

export default App;

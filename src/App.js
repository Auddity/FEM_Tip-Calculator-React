import { useReducer } from 'react';
import './css/App.css';
import logo from './images/logo.svg';
import Form from './components/Form.js';
import Display from './components/Display';

export const ACTIONS = {
  BILL: 'bill',
  PEOPLE: 'people',
  SELECTED: 'selected',
  RESET: 'reset'
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
    case ACTIONS.RESET:
      return { bill: '', people: '', tipAmount: '', total: '', tipPerPerson: ''}
    default:
  }
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD'})

const evaluate = (state, bill, numPeople, tip) => {
  const tipPerPerson = (+bill * +tip) / +numPeople;
  const totalPerPerson = (+bill * (1 + +tip)) / +numPeople;
  return { ...state, tipPerPerson: tipPerPerson, total: totalPerPerson};
}

function App() {
  const [{ 
    bill, people, tipAmount, total, tipPerPerson
  }, dispatch] = useReducer(reducer, { bill: '', people: '', tipAmount: '', total: '0.00', tipPerPerson: '0.00', custom: false })
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
          formatter={NUMBER_FORMATTER}
          dispatch={dispatch}
        />
      </main>
    </div>
  );
}

export default App;

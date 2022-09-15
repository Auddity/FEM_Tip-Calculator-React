import { useReducer } from 'react';
import './css/App.css';
import logo from './images/logo.svg';
import Form from './components/Form.js';
import Display from './components/Display';

export const ACTIONS = {
  BILL: 'bill',
  PEOPLE: 'people',
  SELECTED: 'selected',
  CUSTOM: 'custom',
  CUSTOM_VALUE: 'custom-value',
  RESET: 'reset'
}

function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.BILL:
      if(ACTIONS.BILL !== null && ACTIONS.PEOPLE !== null ) {
        state = { ...state, bill: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount);
      }
      return state;
    case ACTIONS.PEOPLE: 
      if(ACTIONS.BILL !== null && ACTIONS.PEOPLE !== null ) {
        state = { ...state, people: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount);
      }
      return state;
    case ACTIONS.SELECTED: 
      if(ACTIONS.BILL !== null && ACTIONS.PEOPLE !== null) {
        state = { ...state, tipAmount: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount)
      }
      return state;
    case ACTIONS.CUSTOM:
      return { ...state, custom: true };
    case ACTIONS.CUSTOM_VALUE:
      if(ACTIONS.BILL !== null && ACTIONS.PEOPLE !== null) {
        state = { ...state, customValue: payload, tipAmount: payload}
        return evaluate(state, state.bill, state.people, state.tipAmount)
      }
      return state;
    case ACTIONS.RESET:
      return { bill: '', people: '', tipAmount: 0, tipPerPerson: 0, total: 0, custom: false, customValue: '' }
    default:
  }
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD'})

const evaluate = (state, bill, numPeople, tip) => {
  const tipPerPerson = (+bill * (+tip * .01)) / +numPeople;
  const totalPerPerson = (+bill * (1 + (+tip * .01))) / +numPeople;
  return { ...state, tipPerPerson: tipPerPerson, total: totalPerPerson};
}

function App() {
  const [{ 
    bill, tipAmount, people, tipPerPerson, total, custom, customValue
  }, dispatch] = useReducer(reducer, { bill: '', people: '', tipAmount: 0, tipPerPerson: 0, total: 0, custom: false, customValue: '' })
  console.log(customValue)
  
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Splitter Logo" />
      </header>
      <main>
        <Form 
          bill={bill}
          tipAmount={tipAmount}
          people={people} 
          custom={custom}
          customValue={customValue}
          dispatch={dispatch}
        />
        <Display 
          bill={bill}
          people={people}
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

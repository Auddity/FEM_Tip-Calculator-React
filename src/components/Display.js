import React from 'react'
import '../css/Display.css';
import { ACTIONS } from '../App';

function Display({ total, tipPerPerson, formatter, dispatch }) {
  return (
    <div className='Display'>
      <div className="valueCtnr">
        <p>Tip Amount
          <br/>
          <span>/ person</span></p>
        <p className='value'>
          {tipPerPerson !=='' && formatter.format(tipPerPerson)}
        </p>
      </div>
      <div className="valueCtnr">
        <p>Total 
          <br/>
          <span>/ person</span></p>
        <p className='value'>
          {total !=='' && formatter.format(total)}
        </p>
      </div>
      <button className="resetBtn" onClick={() => dispatch( { type: ACTIONS.RESET })}>RESET</button>
    </div>
  )
}

export default Display
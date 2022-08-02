import React from 'react'
import '../css/Display.css';
import { ACTIONS } from '../App';

function Display({ bill, people, total, tipPerPerson, formatter, dispatch }) {
  return (
    <div className='Display'>
      <div className="valueCtnr">
        <p>Tip Amount
          <br/>
          <span>/ person</span></p>
        <p className='value'>
          {total !== Infinity && formatter.format(tipPerPerson)}
        </p>
      </div>
      <div className="valueCtnr">
        <p>Total 
          <br/>
          <span>/ person</span></p>
        <p className='value'>
          {total !== Infinity && formatter.format(total)}
        </p>
      </div>
      <button 
        className={(bill === '' || people === '') ? 'resetBtn default' : 'resetBtn active' }
        onClick={() => dispatch( { type: ACTIONS.RESET })}
        
        >
          RESET
        </button>
      
    </div>
  )
}

export default Display
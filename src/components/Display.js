import React from 'react'
import '../css/Display.css';

function Display({ total, tipPerPerson, formatter }) {
  return (
    <div className='Display'>
      <div className="valueCtnr">
        <p>Tip Amount
          <br/>
          <span>/ person</span></p>
        <p className='value'>
          {tipPerPerson !=='' && formatter.format(tipPerPerson)}
          $4.27
        </p>
      </div>
      <div className="valueCtnr">
        <p>Total 
          <br/>
          <span>/ person</span></p>
        <p className='value'>
          {total !=='' && formatter.format(total)}
          $32.79
        </p>
      </div>
      <button className="resetBtn">RESET</button>
    </div>
  )
}

export default Display
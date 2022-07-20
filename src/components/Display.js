import React from 'react'

function Display({ total, tipPerPerson, formatter }) {
  return (
    <div className='Display'>
      <p>
        {tipPerPerson !=='' && formatter.format(tipPerPerson)}
      </p>
      
      <p>
        {total !=='' && formatter.format(total)}
      </p>
    </div>
  )
}

export default Display
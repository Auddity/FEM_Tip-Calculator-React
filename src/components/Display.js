import React from 'react'

function Display({ total, tipPerPerson }) {
  return (
    <div className='Display'>
      <p>
        {tipPerPerson}
      </p>
      <p>
        {total}
      </p>
    </div>
  )
}

export default Display
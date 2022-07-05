import React from 'react'

function PercentButton({ percent, name }) {
  return (
    <>
      <button
        type='radio'
        id={percent}
        value={percent}
        name='tipAmount'
      >
        PercentButtons
      </button>
    </>
  )
}

export default PercentButton
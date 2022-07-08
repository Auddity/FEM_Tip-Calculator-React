import React from 'react'

function PercentInput({ percent }) {
  return (
    <>
      <input
        type='radio'
        id={percent}
        value={percent}
        name='tipAmount'
      />
    </>
  )
}

export default PercentInput
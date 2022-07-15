import React from 'react'

function PercentInput(props) {
  return (
    <>
      <input
        type='radio'
        id={props.percent}
        value={props.percent}
        name={props.tipAmount}
        checked={props.tipAmount === props.percent}
        onChange={() => props.dispatch({
          type: props.action,
          payload: props.value
        })}
      />
    </>
  )
}

export default PercentInput
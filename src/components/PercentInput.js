import React from 'react'

function PercentInput(props) {
  
  return (
    <>
      <input
        type='radio'
        id={props.value}
        value={props.value}
        name={props.value}
        checked={props.tipAmount === props.value}
        onChange={() => props.dispatch({
          type: props.action,
          payload: props.value
        })
      }
      />
    </>
  )
}

export default PercentInput
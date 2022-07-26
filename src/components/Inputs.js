import React from 'react'

function Inputs(props) {
  return (
    <input
      type='number'
      min='1'
      onChange={(e) => props.dispatch({ type: props.action, payload: e.target.value })}
      name={props.name}
      id={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  )
}

export default Inputs
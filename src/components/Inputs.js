import React from 'react'

function Inputs(props) {
  // console.log(props.value);

  return (
    <input
      type='number'
      onChange={(e) => 
        props.dispatch({ type: props.action, payload: e.target.value })
      }
      name={props.name}
      id={props.name}
      value={props.value}
      // props.bill or props.people
      // ?? conditional in the onChange listener?
    />
  )
}

export default Inputs
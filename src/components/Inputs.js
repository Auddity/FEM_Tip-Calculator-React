import React from 'react'

function Inputs(props) {
  return (
    <input
      type='number'
      // onChange={}
      name={props.name}
      id={props.name}
    />
  )
}

export default Inputs
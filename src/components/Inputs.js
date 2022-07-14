import React from 'react'

function Inputs(props) {
  return (
    <input
      type='number'
      // onChange={}
      name={props.name}
      id={props.name}
      // props.bill or props.people
      // ?? conditional in the onChange listener?
    />
  )
}

export default Inputs
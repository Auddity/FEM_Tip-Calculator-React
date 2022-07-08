import React from 'react'

function Label(props) {
  return (
    <label htmlFor={props.for}>
      {props.for}
    </label>
  )
}

export default Label
import React from 'react'

function Label({ percent }) {
  return (
    <label htmlFor={percent}>
      {percent}
    </label>
  )
}

export default Label
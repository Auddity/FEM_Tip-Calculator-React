import React from 'react'
import PercentButton from './PercentButton'
import Label from './Label'
import '../css/Form.css'

function Form() {
  return (
    <form className="Form">
      <fieldset>
        <PercentButton percent='5%' />
        <Label percent='5%' />
        <PercentButton percent='10%'/>
        <Label percent='10%' />
        <PercentButton percent='15%'/>
        <Label percent='15%' />
        <PercentButton percent='25%'/>
        <Label percent='25%' />
        <PercentButton percent='50%'/>
        <Label percent='50%' />
      </fieldset>
    </form>
  )
}

export default Form

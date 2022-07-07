import React from 'react'
import PercentInput from './PercentInput'
import Label from './Label'
import '../css/Form.css'

function Form() {
  return (
    <form className="Form">
      <fieldset>
        <PercentInput percent='5%' />
        <Label percent='5%' />
        <PercentInput percent='10%'/>
        <Label percent='10%' />
        <PercentInput percent='15%'/>
        <Label percent='15%' />
        <PercentInput percent='25%'/>
        <Label percent='25%' />
        <PercentInput percent='50%'/>
        <Label percent='50%' />
      </fieldset>
    </form>
  )
}

export default Form

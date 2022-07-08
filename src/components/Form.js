import React from 'react'
import PercentInput from './PercentInput'
import Inputs from './Inputs'
import Label from './Label'
import '../css/Form.css'

function Form() {
  return (
    <form className="Form">
      <Inputs name='bill'/>
      <Label for='bill'/>
      <fieldset>
        <PercentInput percent='5%' />
        <Label for='5%' />
        <PercentInput percent='10%'/>
        <Label for='10%' />
        <PercentInput percent='15%'/>
        <Label for='15%' />
        <PercentInput percent='25%'/>
        <Label for='25%' />
        <PercentInput percent='50%'/>
        <Label for='50%' />
      </fieldset>
      <Inputs name='people'/>
      <Label for='people'/>
    </form>
  )
}

export default Form

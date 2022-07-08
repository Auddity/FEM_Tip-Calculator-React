import React from 'react'
import PercentInput from './PercentInput'
import Inputs from './Inputs'
import Label from './Label'
import '../css/Form.css'

function Form() {
  return (
    <form className="Form">
      <div className="formControl">
        <Label for='bill' text='Bill'/>
        <Inputs name='bill'/>
      </div>
      <fieldset>
        <PercentInput percent='5%' />
        <Label for='5%' text='5%'/>
        <PercentInput percent='10%'/>
        <Label for='10%' text='10%' />
        <PercentInput percent='15%'/>
        <Label for='15%' text='15%' />
        <PercentInput percent='25%'/>
        <Label for='25%' text='25%' />
        <PercentInput percent='50%'/>
        <Label for='50%' text='50%' />
      </fieldset>
      <div className="formControl">
        <Label for='people' text='Number of People'/>
        <Inputs name='people'/>
      </div>
    </form>
  )
}

export default Form

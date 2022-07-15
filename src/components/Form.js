import React from 'react'
import PercentInput from './PercentInput'
import Inputs from './Inputs'
import Label from './Label'
import '../css/Form.css'
import { ACTIONS } from '../App'

function Form({ billTotal, people, tipAmount, dispatch}) {
  return (
    <form className="Form">
      <div className="formControl">
        <Label for='bill' text='Bill'/>
        <Inputs 
          name='bill'
          billTotal={billTotal}
          dispatch={dispatch}
          value={billTotal}
          action={ACTIONS.BILL}
        />
      </div>
      <fieldset>
        <PercentInput 
          value='.5'
          tipAmount={tipAmount}
          dispatch={dispatch} 
          action={ACTIONS.SELECTED} 
        />
        <Label for='.5' text='5%'/>
        <PercentInput 
          value='.10'
          tipAmount={tipAmount}
          dispatch={dispatch}
          action={ACTIONS.SELECTED}   
        />
        <Label for='.10' text='10%' />
        <PercentInput 
          value='.15'
          tipAmount={tipAmount}
          dispatch={dispatch}
          action={ACTIONS.SELECTED}   
        />
        <Label for='.15' text='15%' />
        <PercentInput 
          percent='25%'
          value='.25'
          tipAmount={tipAmount}
          dispatch={dispatch} 
          action={ACTIONS.SELECTED}  
        />
        <Label for='.25' text='25%' />
        <PercentInput 
          value='.50'
          tipAmount={tipAmount}
          dispatch={dispatch}
          action={ACTIONS.SELECTED}   
        />
        <Label for='.50' text='50%' />
      </fieldset>
      <div className="formControl">
        <Label for='people' text='Number of People'/>
        <Inputs 
          name='people'
          people={people}
          dispatch={dispatch}
          value={people}
          action={ACTIONS.PEOPLE}
        />
      </div>
    </form>
  )
}

export default Form

import React from 'react'
import PercentInput from './PercentInput'
import Inputs from './Inputs'
import Label from './Label'
import '../css/Form.css'
import dollarIcon from '../images/icon-dollar.svg'
import userIcon from '../images/icon-person.svg'
import { ACTIONS } from '../App'

function Form({ bill, people, tipAmount, dispatch, custom}) {
  return (
    <form className="Form">
      <div className="formControl">
        <Label for='bill' text='Bill'/>
        <img src={dollarIcon} alt="dollar sign" />
        <Inputs 
          name='bill'
          value={bill}
          placeholder='0'
          dispatch={dispatch}
          action={ACTIONS.BILL}
        />
      </div>

      <p>Select Tip %</p>
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

        <div className="customInputControl">
          {!custom && 
            <Label 
              for='custom' 
              text='Custom' 
              onClick={() => dispatch({ type: ACTIONS.CUSTOM })}  
            />
          }
          <Inputs 
            name='custom'
            value={tipAmount}
            dispatch={dispatch}
            action={ACTIONS.SELECTED}
          />
        </div>

      </fieldset>
      <div className="formControl">
        <Label for='people' text='Number of People'/>
        <img src={userIcon} alt="user icon" />
        <Inputs 
          name='people'
          value={people}
          placeholder='0'
          dispatch={dispatch}
          action={ACTIONS.PEOPLE}
        />
      </div>
    </form>
  )
}

export default Form

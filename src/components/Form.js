import React from 'react'
import PercentInput from './PercentInput'
import Inputs from './Inputs'
import Label from './Label'
import ErrMsg from './ErrMsg'
import '../css/Form.css'
import dollarIcon from '../images/icon-dollar.svg'
import userIcon from '../images/icon-person.svg'
import { ACTIONS } from '../App'

function Form({ bill, people, tipAmount, dispatch, custom, customValue }) {
  return (
    <form className="Form">
      <div className="formControl">
        <div className="labelContainer">
          <Label for='bill' text='Bill'/>
          {bill === '0' && <ErrMsg />}
        </div>
        <img src={dollarIcon} alt="dollar sign" />
        <Inputs 
          name='bill'
          value={bill}
          placeholder='0'
          dispatch={dispatch}
          action={ACTIONS.BILL}
        />
      </div>

      <div className="tipCtnr">
      
        <p className='label'>Select Tip %</p>
        <fieldset>
          <PercentInput 
            value='5'
            tipAmount={tipAmount}
            dispatch={dispatch} 
            action={ACTIONS.SELECTED} 
            />
          <Label for='5' text='5%'/>
          <PercentInput 
            value='10'
            tipAmount={tipAmount}
            dispatch={dispatch}
            action={ACTIONS.SELECTED}   
            />
          <Label for='10' text='10%' />
          <PercentInput 
            value='15'
            tipAmount={tipAmount}
            dispatch={dispatch}
            action={ACTIONS.SELECTED}   
            />
          <Label for='15' text='15%' />
          <PercentInput 
            percent='25%'
            value='25'
            tipAmount={tipAmount}
            dispatch={dispatch} 
            action={ACTIONS.SELECTED}  
            />
          <Label for='25' text='25%' />
          <PercentInput 
            value='50'
            tipAmount={tipAmount}
            dispatch={dispatch}
            action={ACTIONS.SELECTED}   
            />
          <Label for='50' text='50%' />

          <div 
            className="customInputControl"
            onClick={() => dispatch({ type: ACTIONS.CUSTOM })}
          >
            {!custom && 
            <Label for='custom'  text='Custom' />
          }
            <Inputs 
              name='custom'
              value={customValue}
              dispatch={dispatch}
              placeholder='0'
              action={ACTIONS.CUSTOM_VALUE}
            />
            <p className="customPercentSymbol">%</p>
          </div>

        </fieldset>

      </div>

      <div className="formControl">
        <div className="labelContainer">
          <Label for='people' text='Number of People'/>
          {people === '0' && <ErrMsg />}
        </div>
        <img src={userIcon} alt="user icon" />
        <Inputs 
          name='people'
          value={people}
          dispatch={dispatch}
          placeholder='0'
          action={ACTIONS.PEOPLE}
        />
      </div>
    </form>
  )
}

export default Form

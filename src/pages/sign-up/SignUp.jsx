import React, { useState } from 'react'
import './SignUp.css'
import check from '../../asset/ui/check.png'

const SignUp = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div className='sign-up'>
      <div className="sign-up-banner">
      <form>
        <div className='input-div'>
          <input name="username" type="text" placeholder="Set Username" /> 
        </div>
        <div className='input-div'>
          <input name="phone" type="text" placeholder="Enter Phone Number" /> 
        </div>
        <div className='input-div'>
          <input name="password" type="password" placeholder="Set Password (6-20 characters)" /> 
        </div>
        <div className='input-div'>
          <input name="confirm" type="password" placeholder="Confirm Password" /> 
        </div>
        <div className='sign-up-agree'>
          <div className='ck-box' onClick={() => {setChecked(!checked)}}><img src={checked ? check : ''} alt="" /></div><p>I have read and agree to the <i>Terms of Service</i></p>
        </div>
        <div>
          <button>Next</button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default SignUp
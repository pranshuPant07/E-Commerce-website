import React from 'react'
import { X } from 'lucide-react';
import './SignUp.css'
function SignUp(props) {

  return (
    <div  className='mainbackground'>
        <div >
            <button id='button1' onClick={props.onClose}><X size={30}/></button>
            <div className='seconddiv'>
                <h2 style={{color:"white"}}>THANK YOU FOR SIGN UP</h2>
                <h4 style={{color:"white"}}>Welcome to our family</h4>
                <p style={{color:"grey"}}>Check your mail-{props.Email} for any updates</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp
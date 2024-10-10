import React from 'react'
import { X } from 'lucide-react';
import './ContactUsPOPUP.css'

function ContactUsPOPUP(props) {
    return (
        <div className='main'>
            <button id='button2' onClick={props.onClose}><X /></button>
            <div className='seconddivv'>
                <h1 style={{fontSize:"25px", textAlign:"center", color:"white"}}>Thank You {props.Name} for reaching us</h1>
                <p style={{fontSize:"17px", textAlign:"center"}}>We'll update you on your {props.Email} as soon as possible</p>
            </div>
        </div>
    )
}

export default ContactUsPOPUP
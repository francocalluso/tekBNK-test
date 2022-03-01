import React from 'react'
import warning from '../warning.png' 
import '../response.css'

export function Response() {
  return (
    <div className='responseContainer'>
        <img className="warningResp" src={warning}/>
        <p className="txtResp">El nombre de usuario o la contraseña son incorrectos</p>
    </div>
  )
}

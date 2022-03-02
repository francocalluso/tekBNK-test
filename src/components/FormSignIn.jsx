import React from 'react'
import warning from '../warning.png'
import "../formSignIn.css";
import { useForm } from '../hooks/useForm'
import { usePasswordToogle } from '../hooks/usePasswordToogle';
import { Loading } from './Loading';
import { Response } from './Response';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const initialForm = {
    name:"",
    password:"",
};

const validationsForm =(form) => {
    let errors = {};

    if(!form.name.trim()) {
        errors.name = "Este campo no debe estar vacío"
    } 

    if(!form.password) {
        errors.password = "Este campo no debe estar vacío"
    }

    return errors;
}  ;

 

export function FormSignIn() {
  
 const{
    form, 
    errors, 
    loading, 
    incorrecto, 
    handleChange, 
    handleSubmit,
    } = useForm(initialForm,validationsForm);

    const [PasswordInputType,ToggleIcon] = usePasswordToogle(); 

 return (
      
    <>
    {loading && <Loading/>}
    <form className="form" onSubmit={handleSubmit}>
        <div className='inputGroup'>
        <h2>Iniciá sesión</h2>
        {incorrecto && <Response/>}
        <label>Usuario<sup>*</sup></label>
        <input 
        className={errors.name ? "inputError" : "inputNormal"}
        type="text" 
        name="name" 
        placeholder="Ingresa tu usuario" 
        onChange={handleChange} 
        value={form.name} 
        />
        {errors.name && <span className="popUpAlertUsuario"><img className="warning"src={warning} alt="warning"/><p className="alerta">{errors.name}</p></span>}
        </div>
        
        <div className='inputGroup'>
        <label>Contraseña<sup>*</sup></label>
        <input
        className={errors.password ? "inputError" : "inputNormal"} 
        type={PasswordInputType} 
        name="password" 
        placeholder="Ingresa tu contraseña" 
        onChange={handleChange} 
        value={form.password} 
        />
        {errors.password && <span className="popUpAlertCont"><img className="warning"src={warning} alt="warning"/><p className="alerta">{errors.password}</p></span>}
        <span className="password-toogle-icon">{ToggleIcon}</span>
        </div>
        
        
        <input
        className="btnSubmit"
        type="submit"
        value="Ingresar"
        />
        <Link to="/recupCont">
        <p className="recupCont">Olvidé mi contraseña</p>
        </Link>
            
    </form>
    </>
  )
}



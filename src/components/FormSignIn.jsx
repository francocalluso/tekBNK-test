import React from 'react'
import { useForm } from '../hooks/useForm'
import warning from '../warning.png'
import "../formSignIn.css";

const initialForm = {
    name:"",
    password:""
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
}  

export const FormSignIn = () => {
  

 const{
    form, 
    errors, 
    loading, 
    response, 
    handleChange, 
    handleSubmit,
    } = useForm(initialForm,validationsForm);

 
  return (
    
    <div className="formSignIn">
        
        <form className="form" onSubmit={handleSubmit}>
            
            <div>
            <h2>Iniciá sesión</h2>
            <label>Usuario<sup>*</sup></label>
            <input 
            type="text" 
            name="name" 
            placeholder="Ingresa tu usuario" 
            onChange={handleChange} 
            value={form.name} 
            />
            {errors.name && <span className="popUpAlert"><img className="warning"src={warning} alt="warning"/><p className="alerta">{errors.name}</p></span>}
            </div>
            
            <div>
            <label>Contraseña<sup>*</sup></label>
            <input 
            type="password" 
            name="password" 
            placeholder="Ingresa tu contraseña" 
            onChange={handleChange} 
            value={form.password} 
            />
            <span className="password-toogle-icon"></span>
            {errors.password && <span className="popUpAlert"><img className="warning"src={warning} alt="warning"/><p className="alerta">{errors.password}</p></span>}
            </div>
            
            
            <input
            type="submit"
            value="Ingresar"
            />
            <a className="recupCont" href="#">Olvidé mi contraseña</a>
            
        </form>
        

    </div>
  )
}

import React from 'react'
import warning from '../warning.png'
import { useForm } from '../hooks/useForm';
import "../formSignIn.css";
import Select from 'react-select';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



const initialForm = {
    documento:"",
};

const validationsForm =(form) => {
    let errors = {};

    if(!form.documento.trim()) {
        errors.documento = "Este campo no debe estar vacío"
    }
    
    return errors;
}  ;

const options = [
    {value: 'DNI', label: 'DNI'},
    {value: 'CI', label: 'CI'},
    {value: 'LC', label: 'LC'},
    {value: 'LE', label: 'LE'}
]

const SelectComponent = () => (
    <Select placeholder="DNI" className= "inputSelect"  options={options} />
  )

export function RecupCont() {
    
    const{
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleSubmit,
        } = useForm(initialForm,validationsForm);

  return (
    <form className="form" onSubmit={handleSubmit}>
                    
    <div className='inputGroup'>
    <h2>Olvidé mi Contraseña</h2>
    <label>Tipo de documento<sup>*</sup></label>
    <SelectComponent/>
    </div>
    
    <div className='inputGroup'>
    <label>Número de documento<sup>*</sup></label>
    <input
    className={errors.documento ? "inputError" : "inputNormal"} 
    type="number" 
    name="documento" 
    placeholder="Ingresa tu número de documento" 
    onChange={handleChange} 
    value={form.documento} 
    />
    {errors.documento && <span className="popUpAlertUsuario"><img className="warning"src={warning} alt="warning"/><p className="alerta">{errors.documento}</p></span>}
    
    </div>
    <div className='btnFlex'>
    <Link
    to='/'
    >
    <button className='btnVolver'>
        Volver
    </button>
    </Link>
    <input
    className="btnContinuar"
    type="submit"
    value="Continuar"
    />
    </div>
    
        
</form>
  )
}

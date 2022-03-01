import { useState } from 'react';



export const useForm = (initialForm, validateForm) => {
 
 const[form, setForm] = useState(initialForm);
 const[errors,setErrors] = useState({});
 const[loading,setLoading] = useState(false);
 const[incorrecto,setIncorrecto] = useState(false);
 
 

 const handleChange = (e) =>{
    const {name,value} = e.target;
    setForm({
         ...form,
         [name]:value

     })
 }

 const handleSubmit = (e) =>{
     e.preventDefault();
     handleChange(e);
     setErrors(validateForm(form));
     console.log(Object.keys(errors).length)
     if(Object.keys(errors).length === 0){
     setLoading(true);
     setTimeout(() => (setIncorrecto(true), setLoading(false)),1500);    
     }else{
         setIncorrecto(false);
     }    
 }

 return {
     form, 
     errors, 
     loading, 
     incorrecto, 
     handleChange, 
     handleSubmit
 }
}

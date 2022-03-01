import React from 'react'
import "../formCard.css";
import { FormSignIn } from './FormSignIn'
import { RecupCont } from './RecupCont';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



export const FormCard = () => {
  

  return (
    <Router>
        <div className="formCard">
            <Routes>
                <Route exact path='/' element={<FormSignIn/>}/>
                <Route exact path='/recupCont' element={<RecupCont/>}/>

            </Routes>
        </div>
    </Router>
  )
}

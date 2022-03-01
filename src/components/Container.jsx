import React from 'react'
import "../container.css"
import { TopLogo } from './TopLogo'
import { FormHeader } from './FormHeader'
import { FormCard } from './FormCard'
import { Loading } from './Loading'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function Container() {

  return (
    <div className="container">

        <TopLogo/>
        <FormHeader/>
        <FormCard/>
    </div>
  )
}

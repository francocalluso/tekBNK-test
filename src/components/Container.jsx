import React from 'react'
import "../container.css"
import { TopLogo } from './TopLogo'
import { FormHeader } from './FormHeader'
import { FormCard } from './FormCard'





export function Container() {

  return (

    <div className="container">
        <TopLogo/>
        <FormHeader/>
        <FormCard/>
    </div>
    
  )
}

import React from 'react'
import "../container.css"
import { TopLogo } from './TopLogo'
import { FormHeader } from './FormHeader'
import { FormSignIn } from './FormSignIn'

export function Container() {
  return (
    <div className="container">
        <TopLogo/>
        <FormHeader/>
        <FormSignIn/>
    </div>
  )
}

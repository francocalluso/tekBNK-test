import React from 'react'
import appDev from '../appDev.png'
import "../formHeader.css"

export function FormHeader() {
  return (
    <>
      <div className="pinkCard"></div>
      <img className="imgGraf" src={appDev} alt="gráfico y persona"/>
    </>
  )
}

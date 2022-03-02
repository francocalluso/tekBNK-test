import React from 'react'
import appDev from 'https://raw.githubusercontent.com/francocalluso/tekBNK-test/main/src/appDev.png'
import "../formHeader.css"

export function FormHeader() {
  return (
    <>
      <div className="pinkCard"></div>
      <img className="imgGraf" src={appDev} alt="gráfico y persona"/>
    </>
  )
}

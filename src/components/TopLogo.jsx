import React from 'react'
import "../topBar.css"
import logo from "https://raw.githubusercontent.com/francocalluso/tekBNK-test/main/src/tekBNK.png"


export function TopLogo() {
  return (
    <div className="topLogo">
        <img className="logo" src={logo} alt="logo tekBANK"/>
        <p className="txtLogoTek">TEK</p>
        <p className="txtLogoBNK">BNK</p>
    </div>
  )
}

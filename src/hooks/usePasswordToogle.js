import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const usePasswordToogle = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = (
  <FontAwesomeIcon icon={ visible ? "eye-slash" : "eye" }
  onClick={ () => setVisibility (visibility => !visibility)}/>
  )

  const InputType = visible ? "text" : "password";
  
  
  return[InputType, Icon];
}



import React from 'react'
import { Spinner } from 'reactstrap' 
import '../loading.css'

export function Loading() {
  return (
    <div className='loadingPage'>
        <Spinner className='loadingSpinner'>
            <span className='visually-hidden'></span>
        </Spinner>
    </div>
  )
}

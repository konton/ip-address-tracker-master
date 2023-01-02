import React from 'react'

export default function Info(props) {
  return (
    <div className='Info'>
        {props.data}
       <p className='Details'>{props.detail}</p> 
    </div>
  )
}

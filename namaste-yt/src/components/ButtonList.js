import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const names = ["Story","News","India","Luck","React","Javascript","Software","Computer"]
  return (
   <div className='flex p-2 m-2'>
    {names?.map((name,id)=><Button name={name} key={id}/>)}
   </div>
  )
}

export default ButtonList
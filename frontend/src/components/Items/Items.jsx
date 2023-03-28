import React from 'react'

import './Items.css'

import { Link } from 'react-router-dom'

import item from './item.js'

const Items = () => {
    // console.log(item)
  return (
    <div classname="container-child">
      {item.map((item, index) => (
        <>
        <Link key={index} to={`${item.link}`}><img className='img' src={item.img} alt={item.name} /></Link>
        </>
      ))}
    </div>
    
  )
}

export default Items

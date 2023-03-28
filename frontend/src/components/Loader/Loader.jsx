import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
        <div className='loader-child' style={{ textAlign: 'center' }}>
            <h1>Loading</h1>
            <span className="loading-dots">
            <span style={{color: "#1b4965"}}>.</span>
            <span style={{color: "#1b4965"}}>.</span>
            <span style={{color: "#1b4965"}}>.</span>
            </span>
        </div>
    </div>
  )
}

export default Loader

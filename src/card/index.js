import React from 'react'

const Card = ({ children, className,head,details,...rest }) => {
    // const cardAttp = `bg-white p-4 rounded-lg shadow-md ${className ?? ""}`;
    
  return (
    <div className='card' {...rest} >
      <img src='/logomain.png' width='80px'height='80px'  alt='logo' style={{marginLeft:"40%"}}/>
          <h1>{head}</h1>
          <h2>{details}</h2>
        {children}
    </div>
  )
}

export default Card
import React from 'react'

const Inputs = ({icon, type, placeholder, value, onChange}) => {
  return (
    <div className='input'>
        <img src={icon} alt={'${placeholder} icon'} className='input-icon' />
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onchange}
        />
    </div>
  )
}

export default Inputs
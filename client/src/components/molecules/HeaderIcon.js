import React from 'react'

const HeaderIcon = ({ children }) => {
  return (
    <a href='#' className='ml-2'>
      <div className='icon-circle-wrapper'>
        {children}
      </div>
    </a>
  )
}

export default HeaderIcon
import React from 'react'
import Icon from '../atoms/Icon'

const HeaderIcon = ({ iconName }) => {
  return (
    <a href='#'>
      <div className='icon-circle-wrapper'>
        <Icon
          name={iconName}
          size={15}
          color='#222f3e'
        />
      </div>
    </a>
  )
}

export default HeaderIcon
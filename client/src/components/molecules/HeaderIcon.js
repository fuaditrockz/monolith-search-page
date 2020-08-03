import React from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const HeaderIcon = ({ children, description, key }) => {
  return (
    <Link to='/' className='ml-3'>
      <OverlayTrigger
        key={key}
        placement='bottom'
        overlay={
          <Tooltip id={key}>
            {description}
          </Tooltip>
        }
      >
        <div className='icon-circle-wrapper'>
          {children}
        </div>
      </OverlayTrigger>
    </Link>
  )
}

export default HeaderIcon
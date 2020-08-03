import React from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const HeaderIcon = ({ children, description, name }) => {
  return (
    <Link to={`/${name}`} className='ml-3'>
      <OverlayTrigger
        key={name}
        placement='bottom'
        overlay={
          <Tooltip id={name}>
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
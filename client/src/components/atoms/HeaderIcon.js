import React from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

class HeaderIcon extends React.Component {
  constructor(props) {
    super(props)
    this.wrapper = React.createRef()
  }

  render() {
    const { children, description, name } = this.props
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
          <div className='icon-circle-wrapper' ref={this.wrapper}>
            {children}
          </div>
        </OverlayTrigger>
      </Link>
    )
  }
}

export default HeaderIcon
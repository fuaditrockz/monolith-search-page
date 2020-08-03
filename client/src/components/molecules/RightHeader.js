import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FiPlusCircle, FiSearch } from 'react-icons/fi'

import HeaderIcon from '../atoms/HeaderIcon'

const RightHeader = () => {
  return (
    <Col xs lg="10" className='icons-wrapper'>
      <Row className='pr-5'>
        <HeaderIcon
          description='Search Pokemon'
          name='search-pokemon'
        >
          <FiSearch size={20} />
        </HeaderIcon>
        <HeaderIcon
          description='Add Pokemon'
          name='add-pokemon'
        >
          <FiPlusCircle size={20} />
        </HeaderIcon>
      </Row>
    </Col>
  )
}

export default RightHeader
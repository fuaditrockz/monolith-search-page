import React from 'react'
import { Row, Col, Nav, InputGroup, FormControl } from 'react-bootstrap'
import logo from '../../assets/pokemon.svg'
import HeaderIcon from '../molecules/HeaderIcon'

const Header = () => {
  return (
    <div className='header'>
      <Row>
        <Col xs lg="2" className='logo-wrapper'>
          <Row className='pl-5'>
            <img src={logo} className="logo" alt="logo" />
            <h2 className='ml-2'>Pokedex</h2>
          </Row>
        </Col>
        <Col xs lg="10" className='icons-wrapper'>
          <Row className='pr-5'>
            <HeaderIcon iconName='search' />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Header
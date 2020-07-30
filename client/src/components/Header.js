import React from 'react'
import { Row, Col, Nav, InputGroup, FormControl } from 'react-bootstrap'
import logo from '../assets/pokemon.svg'
import Icon from './atoms/Icons'

const Header = () => {
  return (
    <div className='Header'>
      <Row>
        <Col xs lg="2">
          <Row className='pl-5'>
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className='ml-2'>Pokedx</h2>
          </Row>
        </Col>
        <Col xs lg="8">
          <Icon
            name='search'
            size={30}
            color='#576574'
          />
        </Col>
      </Row>
    </div>
  )
}

export default Header
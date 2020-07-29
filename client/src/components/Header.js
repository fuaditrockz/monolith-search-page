import React from 'react'
import { Row, Col, Nav, InputGroup, FormControl } from 'react-bootstrap'
import logo from '../assets/pokemon.svg'

const Header = () => {
  return (
    <div className='Header'>
      <Row>
        <Col xs lg="2">
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col xs lg="8">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Header
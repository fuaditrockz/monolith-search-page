import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import logo from '../../assets/pokemon.svg'
import RightHeader from '../molecules/RightHeader'

const Header = () => {
  return (
    <div className='header'>
      <Row>
        <Col xs lg="2" className='logo-wrapper'>
          <Link to='/'>
            <Row className='pl-5'>
              <img src={logo} className="logo" alt="logo" />
              <h2 className='pokedex-title ml-2'>Pokedex</h2>
            </Row>
          </Link>
        </Col>
        <RightHeader />
      </Row>
    </div>
  )
}

export default Header
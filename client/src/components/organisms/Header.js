import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FiPlusCircle, FiSearch } from 'react-icons/fi'

import logo from '../../assets/pokemon.svg'
import HeaderIcon from '../molecules/HeaderIcon'

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
        <Col xs lg="10" className='icons-wrapper'>
          <Row className='pr-5'>
            <HeaderIcon description='Search Pokemon' key='search-pokemon'>
              <FiSearch size={20} />
            </HeaderIcon>
            <HeaderIcon description='Add Pokemon' key='add-pokemon'>
              <FiPlusCircle size={20} />
            </HeaderIcon>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Header
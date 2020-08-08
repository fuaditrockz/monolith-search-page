import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { FiPlusCircle, FiSearch } from 'react-icons/fi'

import HeaderIcon from '../atoms/HeaderIcon'
import logo from '../../assets/pokemon.svg'

export default class Header extends React.Component {
  render() {
    return (
      <Row className='header-container'>
        <Col lg="6" md="6" sm="6" xs="6" className='logo-wrapper'>
          <Link to='/'>
            <Row className='pl-5'>
              <img src={logo} className="logo" alt="logo" />
              <h2 className='pokedex-title ml-2'>Pokedex</h2>
            </Row>
          </Link>
        </Col>
        <Col lg="6" md="6" sm="6" xs="6">
          <Container className='icons-wrapper'>
            <Row>
              <Col style={{
                display: 'flex',
                flexDirection: 'row'
              }}>
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
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
}
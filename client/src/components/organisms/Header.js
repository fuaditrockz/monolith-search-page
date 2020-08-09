import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap'
import { FiPlusCircle, FiSearch } from 'react-icons/fi'

import { PokemonContextConsumer } from '../../context/PokemonContext'

import HeaderIcon from '../atoms/HeaderIcon'
import logo from '../../assets/pokemon.svg'

export default class Header extends React.Component {
  renderSearchInput() {
    return (
      <PokemonContextConsumer>
        {context => (
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                <FiSearch size={20} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search Pokemon by name.,"
              value={context.state.searchInputValue}
              onChange={context.onChangeSearchInput}
            />
          </InputGroup>
        )}
      </PokemonContextConsumer>
    )
  }

  renderHeaderIcons() {
    return (
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
    )
  }

  renderRightComponent() {
    const { isSearchHeader } = this.props
    return (
      <Col
        xl={isSearchHeader ? 9 : 6}
        lg={isSearchHeader ? 9 : 6}
        md={isSearchHeader ? 9 : 6}
        sm={isSearchHeader ? 12 : 6}
        xs={isSearchHeader ? 12 : 6}
      >
        {isSearchHeader ? (
          this.renderSearchInput()
        ) : (
          this.renderHeaderIcons()
        )}
      </Col>
    )
  }

  render() {
    const { isSearchHeader } = this.props
    return (
      <Row className='header-container'>
        <Col
          xl={isSearchHeader ? 2 : 6}
          lg={isSearchHeader ? 3 : 6}
          md={isSearchHeader ? 3 : 6}
          sm={isSearchHeader ? 12 : 6}
          xs={isSearchHeader ? 12 : 6}
          className={`logo-wrapper ${isSearchHeader && 'display-none'}`}
        >
          <Link to='/'>
            <Row>
              <Col className='flex-direction-row'>
                <img src={logo} className="logo" alt="logo" />
                <h2 className='pokedex-title ml-2 mb-0'>Pokedex</h2>
              </Col>
            </Row>
          </Link>
        </Col>
        {this.renderRightComponent()}
      </Row>
    )
  }
}
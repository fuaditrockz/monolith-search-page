import React from 'react'
import {
  Col,
  Row
} from 'react-bootstrap'

class PokemonCard extends React.Component {
  render() {
    return (
      <Col
        className='pokemon-card'
        md={3}
      >
        <Row className='pl-3'>
          <Col>
            <h3>LAPRAS</h3>
            <h5>#131</h5>
          </Col>
        </Row>
        <Row>
          <Col className='pokemon-image'>
            <img src='https://cdn.bulbagarden.net/upload/7/73/004Charmander.png' width={200} />
          </Col>
        </Row>
        <Row className='pl-3 pr-3 pokemon-card-footer'>
          <Col md={6} className='pokemon-type'>
            <h5>Water</h5>
          </Col>
          <Col md={6} className='pokemon-sign'>
            <h5>Pokemon</h5>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default PokemonCard
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
        md={4}
      >
        <Row className='pl-3 pokemon-card-header'>
          <Col>
            <h3 className='white bold mb-0'>RIZAL</h3>
            <h5 className='white thin'>#131</h5>
          </Col>
        </Row>
        <Row>
          <Col className='pokemon-image'>
            <img src='https://cdn.bulbagarden.net/upload/7/73/004Charmander.png' width={200} />
          </Col>
        </Row>
        <Row className='pl-3 pr-3 pokemon-card-footer'>
          <Col md={6} className='pokemon-type'>
            <h5 className='white thin'>Water</h5>
          </Col>
          <Col md={6} className='pokemon-sign'>
            <div>
              <div className='mini-rect mr-2' /> 
              <h5 className='white thin'>Pokémon</h5>
            </div>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default PokemonCard
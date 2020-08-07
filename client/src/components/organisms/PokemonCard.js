import React from 'react'
import {
  Col,
  Row
} from 'react-bootstrap'

class PokemonCard extends React.Component {
  renderHeader() {
    const { name, number } = this.props
    return (
      <Row className='pl-3 pokemon-card-header'>
        <Col>
          <h3 className='white bold mb-0'>{name.toUpperCase()}</h3>
          <h5 className='white thin'>#{number}</h5>
        </Col>
      </Row>
    )
  }

  renderBody() {
    const { image } = this.props
    return (
      <Row>
        <Col className='pokemon-image'>
          <img
            src={image}
            width={200}
            alt='Pokemon'
          />
        </Col>
      </Row>
    )
  }

  renderFooter() {
    const { type, product } = this.props
    return (
      <Row className='pl-3 pr-3 pokemon-card-footer'>
        <Col md={6} className='pokemon-type'>
          <h5 className='white thin'>{type}</h5>
        </Col>
        <Col md={6} className='pokemon-sign'>
          <div>
            <div className='mini-rect mr-2' /> 
            <h5 className='white thin'>{product}</h5>
          </div>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <Col
        className='pokemon-card'
        md={4}
      >
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </Col>
    )
  }
}

export default PokemonCard
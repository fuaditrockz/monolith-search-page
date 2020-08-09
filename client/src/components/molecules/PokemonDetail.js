import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { PokemonContextConsumer } from '../../context/PokemonContext'
import Loading from '../atoms/Loading'

export default class PokemonDetail extends React.Component {
  renderImage(image, name) {
    return (
      <Col md={4}>
        <div className='pd-image'>
          <img
            src={image}
            width={200}
            alt={name.toLowerCase()}
          />
        </div>
      </Col>
    )
  }

  renderOtherDetails(details) {
    return (
      <Col md={8}>
        <Row>
          {details.map((detail, index) => (
            <Col md={6} className='mb-3' key={index}>
              <div className='pd-other-detail'>
                <p className='mb-0'>{detail.label}</p>
                <h6>
                  {detail.value}
                  {detail.unit && <span>{detail.unit}</span>}
                </h6>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    )
  }

  renderAbilities(abilities) {
    return (
      <Col md={12} className='mb-3'>
        <div className='pd-other-detail'>
          <p className='mb-0'>Abilities</p>
          <Row>
            <Col>
              <div className='abilities-list'>
                {abilities.map((ability, index) => (
                  <h5 key={index}>
                    <Badge variant="primary" className='mr-2'>
                      {ability}
                    </Badge>
                  </h5>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }

  renderPokemonDetail(pokemon, onClickClose) {
    const { screenLocation } = this.props
    const {
      name,
      type,
      category,
      image_url,
      catch_rate,
      height,
      weight,
      abilities,
      description
    } = pokemon
    let otherDetails = []

    otherDetails.push(
      {
        label: 'Category',
        value: category
      },
      {
        label: 'Type',
        value: type
      },
      {
        label: 'Catch Rate',
        value: catch_rate,
        unit: '%'
      },
      {
        label: 'Height',
        value: height,
        unit: 'm'
      },
      {
        label: 'Weight',
        value: weight,
        unit: 'kg'
      }
    )

    return (
      <Card className='mb-5'>
        <Card.Header as="h5">
          <Container>
            <Row>
              <Col>{name}</Col>
              <Col style={{ textAlign: 'right' }}>
              <Link
                to={screenLocation.includes('search-pokemon') ? '/search-pokemon' : '/'}
                onClick={onClickClose}
              >
                <FiX size={30} color='#fff' />
              </Link>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Container className='pd-container'>
            <Row className='mb-4'>
              {this.renderImage(image_url, name)}
              {this.renderOtherDetails(otherDetails)}
            </Row>
            <Row>
              {this.renderAbilities(abilities)}
            </Row>
            <Row>
              <Col md={12}>
                <Card.Text>
                  {description}  
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    )
  }

  render() {
    const { pokemonId } = this.props
    return (
      <PokemonContextConsumer>
        {context => {
          const pokemon = context.getPokemonDetail(pokemonId)
          return !pokemon ? (
            <Loading />
          ) : (
            this.renderPokemonDetail(pokemon, context.onClickClosePokemonCard)
          )
        }}
      </PokemonContextConsumer>
    )
  }
}
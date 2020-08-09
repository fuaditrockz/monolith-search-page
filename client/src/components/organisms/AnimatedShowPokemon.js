import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { AnimatedRoute } from 'react-router-transition'

import { PokemonContextConsumer } from '../../context/PokemonContext'
import PokemonDetail from '../molecules/PokemonDetail'

const sidebarTransition = {
  atEnter: {
    y: 100
  },
  atLeave: {
    y: 100
  },
  atActive: {
    y: 0
  },
}

class ShowPokemon extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Row className='mt-5'>
            <PokemonDetail
              pokemonId={this.props.location.state.id}
              screenLocation={this.props.location.pathname}
            />
          </Row>
        </Container>
      </Container>
    )
  }
}

export default class AnimatedShowPokemon extends React.Component {
  render() {
    const { screenName } = this.props
    return (
      <PokemonContextConsumer>
        {context => (
          <div
            style={{
              position: 'absolute',
              top: 100,
              left: 0,
              width: '100%',
              height: '50%',
              display: context.state.pokemonDetailDisplay,
              zIndex: context.state.pokemonDetailZIndex
            }}
          >
            <AnimatedRoute
              path={screenName ? `/${screenName}/:pokemon_id` : '/:pokemon_id'}
              component={ShowPokemon}
              mapStyles={styles => {
                return {
                  transform: `
                    translateX(${styles.y}%)
                  `
                }
              }}
              {...sidebarTransition}
            />
          </div>
        )}
      </PokemonContextConsumer>
    )
  }
}
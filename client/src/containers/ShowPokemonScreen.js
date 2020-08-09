import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { AnimatedRoute } from 'react-router-transition'

import { PokemonContextConsumer } from '../context/PokemonContext'
import PokemonDetail from '../components/organisms/PokemonDetail'

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

class ShowPokemonScreen extends React.Component {
  render() {
    if(!this.props.location.state) {
      return null
    }
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

export default class AnimatedShowPokemonScreen extends React.Component {
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
              component={ShowPokemonScreen}
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
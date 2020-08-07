import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { PokemonContextConsumer, PokemonContextProvider } from '../context/PokemonContext'

import Loading from '../components/atoms/Loading'

export default class ShowPokemonScreen extends React.Component {
  renderPokemonDetail() {
    const { id } = this.props.location.state
    return (
      <PokemonContextConsumer>
        {context => {
          const pokemon = context.getPokemonDetail(id)
          console.log(pokemon)
          return (
            <Container className='mt-5'>
              <Row>
                {!pokemon ? (
                  <Loading />
                ) : (
                  <h1>{pokemon.name}</h1>
                )}
              </Row>
            </Container>
          )
        }}
      </PokemonContextConsumer>
    )
  }

  render() {
    console.log('THIS PROPS', this.props.location)
    return (
      <PokemonContextProvider>
        {this.renderPokemonDetail()}
      </PokemonContextProvider>
    )
  }
}
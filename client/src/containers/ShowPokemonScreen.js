import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { PokemonContextProvider } from '../context/PokemonContext'
import PokemonDetail from '../components/organisms/PokemonDetail'

export default class ShowPokemonScreen extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <Container className='mt-5'>
        <Row>
          <PokemonContextProvider>
            <PokemonDetail pokemonId={this.props.location.state.id} />
          </PokemonContextProvider>
        </Row>
      </Container>
    )
  }
}
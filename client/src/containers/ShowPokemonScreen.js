import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { PokemonContextProvider } from '../context/PokemonContext'
import PokemonDetail from '../components/organisms/PokemonDetail'
import Header from '../components/organisms/Header'

export default class ShowPokemonScreen extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <Container fluid>
        <Header />
        <Container>
          <Row className='mt-5'>
            <PokemonContextProvider>
              <PokemonDetail pokemonId={this.props.location.state.id} />
            </PokemonContextProvider>
          </Row>
        </Container>
      </Container>
    )
  }
}
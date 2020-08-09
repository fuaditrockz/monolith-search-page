import React from 'react'
import { Container, Row, } from 'react-bootstrap'

import { PokemonContextProvider } from '../context/PokemonContext'
import AllPokemonCards from '../components/organisms/AllPokemonCards'
import Header from '../components/organisms/Header'
import AnimatedShowPokemon from '../components/organisms/AnimatedShowPokemon'

class HomeScreen extends React.Component {
  render() {
    return (
      <PokemonContextProvider>
        <Container fluid>
          <Header />
          <Row>
            <AllPokemonCards />
          </Row>
          <AnimatedShowPokemon />
        </Container>
      </PokemonContextProvider>
    )
  }
}

export default HomeScreen

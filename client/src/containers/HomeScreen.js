import React from 'react'
import { Container, Row, } from 'react-bootstrap'

import { PokemonContextProvider } from '../context/PokemonContext'
import AllPokemonCards from '../components/organisms/AllPokemonCards'
import Header from '../components/organisms/Header'

class HomeScreen extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Row>
          <PokemonContextProvider>
            <AllPokemonCards />
          </PokemonContextProvider>
        </Row>
      </Container>
    )
  }
}

export default HomeScreen

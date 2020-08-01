import React from 'react'
import { Container, Row, } from 'react-bootstrap'

import Header from '../components/organisms/Header'
import PokemonCard from '../components/organisms/PokemonCard'

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <>
        <Container fluid>
          <Header />
        </Container>
        <Container fluid>
          <Row>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </Row>
        </Container>
      </>
    )
  }
}

export default HomeScreen

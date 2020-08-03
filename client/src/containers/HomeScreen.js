import React from 'react'
import { Container, Row, } from 'react-bootstrap'

import PokemonCard from '../components/organisms/PokemonCard'

class HomeScreen extends React.Component {
  render() {
    return (
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
    )
  }
}

export default HomeScreen

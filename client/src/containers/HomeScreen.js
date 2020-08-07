import React from 'react'
import { Container, Row, } from 'react-bootstrap'

import { PokemonContextConsumer, PokemonContextProvider } from '../context/PokemonContext'
import PokemonCard from '../components/organisms/PokemonCard'
import Loading from '../components/atoms/Loading'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      error: {},
      isLoading: true
    }
  }

  renderAllPokemon() {
    return (
      <PokemonContextConsumer>
        {context => {
          if(context.state.isLoading || !context.state.pokemon) {
            return <Loading />
          }
          return context.state.pokemon.map((poke, index) => {
            return (
              <PokemonCard
                key={index}
                name={poke.name}
                number={poke.product_number}
                image={poke.image_url}
                type={poke.type}
                product={poke.product_by}
                pokemon_id={poke._id}
              />
            )
          })
        }}
      </PokemonContextConsumer>
    )
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <PokemonContextProvider>
             {this.renderAllPokemon()}
          </PokemonContextProvider>
        </Row>
      </Container>
    )
  }
}

export default HomeScreen

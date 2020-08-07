import React from 'react'
import { Container, Row, } from 'react-bootstrap'

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

    this.getPokemon = this.getPokemon.bind(this)
  }

  componentDidMount() {
    console.log('running')
    this.getPokemon()
  }

  async getPokemon() {
    await fetch('/v1/pokemon')
      .then(response => response.json())
      .then(payload => {
        const { data } = payload
        console.log(data)
        this.setState({
          pokemon: data,
          isLoading: false
        })
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  renderAllPokemon() {
    const { pokemon } = this.state
    return pokemon.map((poke, index) => {
      return (
        <PokemonCard
          key={index}
          name={poke.name}
          number={poke.product_number}
          image={poke.image_url}
          type={poke.type}
          product={poke.product_by}
        />
      )
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {this.state.isLoading || !this.state.pokemon ? (
            <Loading />
          ) : (
            this.renderAllPokemon()
          )}
        </Row>
      </Container>
    )
  }
}

export default HomeScreen

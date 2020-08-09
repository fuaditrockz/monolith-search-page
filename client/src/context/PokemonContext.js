import React from 'react'

const PokemonContext = React.createContext()

export class PokemonContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      error: {},
      isLoading: true
    }

    this.getAllPokemon = this.getAllPokemon.bind(this)
    this.getPokemonDetail = this.getPokemonDetail.bind(this)
  }

  componentDidMount() {
    console.log('running')
    this.getAllPokemon()
  }

  getPokemonDetail(id) {
    const { pokemon } = this.state
    const choosenPokemon = pokemon.find(poke => poke._id === id)
    return choosenPokemon
  }

  async getAllPokemon() {
    await fetch('/v1/pokemon')
      .then(response => response.json())
      .then(payload => {
        const { data } = payload
        this.setState({
          pokemon: data,
          isLoading: false
        })
      })
      .catch(error => {
        console.error('There was an error!', error);
      })
  }

  render() {
    return (
      <PokemonContext.Provider
        value={{
          state: this.state,
          getPokemonDetail: this.getPokemonDetail
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    )
  }
}

export class PokemonContextConsumer extends React.Component {
  render() {
    return (
      <PokemonContext.Consumer>
        {this.props.children}
      </PokemonContext.Consumer>
    )
  }
}
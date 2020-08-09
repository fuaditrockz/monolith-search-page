import React from 'react'

const PokemonContext = React.createContext()

export class PokemonContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      error: {},
      isLoading: true,
      pokemonDetailDisplay: 'none',
      pokemonDetailZIndex: 0,
      searchInputValue: '',
      filteredPokemon: [],
      searchStatus: 'idle'
    }

    this.getAllPokemon = this.getAllPokemon.bind(this)
    this.getPokemonDetail = this.getPokemonDetail.bind(this)
    this.onClickPokemonCard = this.onClickPokemonCard.bind(this)
    this.onClickClosePokemonCard = this.onClickClosePokemonCard.bind(this)
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this)
  }

  componentDidMount() {
    this.getAllPokemon()
  }

  async getFilteredPokemon(name) {
    if(name) {
      await fetch(`/v1/pokemon/name=${name}`)
      .then(response => response.json())
      .then(payload => {
        const { data } = payload
        this.setState({
          filteredPokemon: [...data],
          searchStatus: 'result-found'
        })
      })
      .catch(error => {
        this.setState({
          searchStatus: 'no-result'
        })
      })
    } else {
      console.log('Doesnt have name')
      this.setState({
        searchStatus: 'idle'
      })
    }
  }

  onChangeSearchInput(e) {
    this.setState({
      searchInputValue: e.target.value,
      searchStatus: 'searching'
    })
    setTimeout(() => {
      this.getFilteredPokemon(this.state.searchInputValue)
    }, 2000);
  }


  onClickPokemonCard() {
    this.setState({
      pokemonDetailDisplay: 'block',
      pokemonDetailZIndex: 100
    })
  }

  onClickClosePokemonCard() {
    setTimeout(() => {
      this.setState({
        pokemonDetailDisplay: 'none',
        pokemonDetailZIndex: -100
      })
    }, 700);
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
          getPokemonDetail: this.getPokemonDetail,
          onClickPokemonCard: this.onClickPokemonCard,
          onClickClosePokemonCard: this.onClickClosePokemonCard,
          onChangeSearchInput: this.onChangeSearchInput
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
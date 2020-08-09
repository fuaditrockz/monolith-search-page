import React from 'react'

const SearchPokemonContext = React.createContext()

export class SearchPokemonContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInputValue: '',
      filteredPokemon: [],
      isNotFound: true
    }
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this)
  }

  async getFilteredPokemon(name) {
    if(name) {
      await fetch(`/v1/pokemon/name=${name}`)
      .then(response => response.json())
      .then(payload => {
        const { data } = payload
        this.setState({
          filteredPokemon: [...data],
          isNotFound: false
        })
      })
      .catch(error => {
        this.setState({
          isNotFound: true
        })
      })
    } else {
      this.setState({
        isNotFound: true
      })
    }
  }

  onChangeSearchInput(e) {
    console.log(e.target.value)
    this.setState({
      searchInputValue: e.target.value
    })
    setTimeout(() => {
      this.getFilteredPokemon(this.state.searchInputValue)
    }, 1000);
  }

  render() {
    console.log(this.state.isNotFound)
    return (
      <SearchPokemonContext.Provider
        value={{
          state: this.state,
          onChangeSearchInput: this.onChangeSearchInput
        }}
      >
        {this.props.children}
      </SearchPokemonContext.Provider>
    )
  }
}

export class SearchPokemonContextConsumer extends React.Component {
  render() {
    return (
      <SearchPokemonContext.Consumer>
        {this.props.children}
      </SearchPokemonContext.Consumer>
    )
  }
}
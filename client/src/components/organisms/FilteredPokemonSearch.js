import React from 'react'

import { PokemonContextConsumer } from '../../context/PokemonContext'

import PokemonCard from '../molecules/PokemonCard'
import NoResult from '../atoms/NoResult'

export default class FilteredPokemonSearch extends React.Component {
  render() {
    const { screenLocation } = this.props
    return (
      <PokemonContextConsumer>
        {context => {
          switch (context.state.searchStatus) {
            case 'idle':
              return (
                <NoResult
                  message='Please type something...'
                  noResultType={context.state.searchStatus}
                />
              )
            case 'searching':
              return (
                <NoResult
                  message={`Search for "${context.state.searchInputValue}"`}
                  noResultType={context.state.searchStatus}
                />
              )
            case 'no-result':
              return (
                <NoResult
                  message={`No result for "${context.state.searchInputValue}"`}
                  noResultType={context.state.searchStatus}
                />
              )
            case 'result-found':
              return context.state.filteredPokemon.map((poke, index) => (
                <PokemonCard
                  key={index}
                  name={poke.name}
                  number={poke.product_number}
                  image={poke.image_url}
                  type={poke.type}
                  product={poke.product_by}
                  pokemon_id={poke._id}
                  onClick={context.onClickPokemonCard}
                  screenLocation={screenLocation}
                />
              ))
            default:
              return (
                <NoResult
                  message='Please type something...'
                />
              ) 
          }
        }}
      </PokemonContextConsumer>
    )
  }
}
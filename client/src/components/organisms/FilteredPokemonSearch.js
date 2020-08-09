import React from 'react'

import { SearchPokemonContextConsumer } from '../../context/SearchPokemonContext'

import PokemonCard from '../molecules/PokemonCard'

export default class FilteredPokemonSearch extends React.Component {
  render() {
    return (
      <SearchPokemonContextConsumer>
        {context => {
          console.log('get filtered', context.state.filteredPokemon)
          return context.state.filteredPokemon.map((poke, index) => (
            <PokemonCard
              key={index}
              name={poke.name}
              number={poke.product_number}
              image={poke.image_url}
              type={poke.type}
              product={poke.product_by}
              pokemon_id={poke._id}
            />
          ))
        }}
      </SearchPokemonContextConsumer>
    )
  }
}
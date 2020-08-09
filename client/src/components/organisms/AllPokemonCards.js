import React from 'react'
import { PokemonContextConsumer } from '../../context/PokemonContext'

import PokemonCard from '../molecules/PokemonCard'
import Loading from '../atoms/Loading'

export default class AllPokemonCards extends React.Component {
  render() {
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
                onClick={context.onClickPokemonCard}
              />
            )
          })
        }}
      </PokemonContextConsumer>
    )
  }
}
import React from 'react'
import { Row, Container } from 'react-bootstrap'

import { PokemonContextProvider } from '../context/PokemonContext'
import Header from '../components/organisms/Header'
import FilteredPokemonSearch from '../components/organisms/FilteredPokemonSearch'
import AnimatedShowPokemonScreen from './ShowPokemonScreen'

export default class SearchScreen extends React.Component {
  render() {
    const screenName = 'search-pokemon'
    return (
      <PokemonContextProvider>
        <Container fluid>
          <Header isSearchHeader />
          <Row>
            <FilteredPokemonSearch screenLocation={screenName} />
          </Row>
          <AnimatedShowPokemonScreen screenName={screenName} />
        </Container>
      </PokemonContextProvider>
    )
  }
}
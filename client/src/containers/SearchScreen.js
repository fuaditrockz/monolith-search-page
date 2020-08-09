import React from 'react'
import { Row, Container } from 'react-bootstrap'

import { SearchPokemonContextProvider } from '../context/SearchPokemonContext'
import Header from '../components/organisms/Header'
import FilteredPokemonSearch from '../components/organisms/FilteredPokemonSearch'

export default class SearchScreen extends React.Component {
  render() {
    return (
      <Container fluid>
        <SearchPokemonContextProvider>
          <Header isSearchHeader />
          <Row>
            <FilteredPokemonSearch />
          </Row>
        </SearchPokemonContextProvider>
      </Container>
    )
  }
}
import React from 'react'
import { Container, Row } from 'react-bootstrap'

import AddPokemonForm from '../components/organisms/AddPokemonForm'
import { AddPokemonContextProvider } from '../context/AddPokemonContext'
import Header from '../components/organisms/Header'

class AddPokemonScreen extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Container>
          <Row className='mt-5'>
            <AddPokemonContextProvider>
              <AddPokemonForm />
            </AddPokemonContextProvider>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default AddPokemonScreen
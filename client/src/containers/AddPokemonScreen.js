import React from 'react'
import { Container, Row } from 'react-bootstrap'

import AddPokemonForm from '../components/organisms/AddPokemonForm'
import { AddPokemonContextProvider } from '../context/AddPokemonContext'

class AddPokemonScreen extends React.Component {
  render() {
    return (
      <Container className='mt-5'>
        <Row>
          <AddPokemonContextProvider>
            <AddPokemonForm />
          </AddPokemonContextProvider>
        </Row>
      </Container>
    )
  }
}

export default AddPokemonScreen
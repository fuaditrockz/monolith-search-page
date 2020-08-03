import React from 'react'
import { Container, Row } from 'react-bootstrap'

import AddPokemonForm from '../components/organisms/AddPokemonForm'

class AddPokemonScreen extends React.Component {
  render() {
    return (
      <Container className='mt-5'>
        <Row>
          <AddPokemonForm />
        </Row>
      </Container>
    )
  }
}

export default AddPokemonScreen
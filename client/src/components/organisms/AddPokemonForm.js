import React from 'react'
import { Card } from 'react-bootstrap'

import PokemonFormInputs from '../molecules/PokemonFormInputs'

class AddPokemonForm extends React.Component {
  render() {
    return (
      <Card
        bg='light'
        key='form'
        text='dark'
        style={{ width: '100%' }}
        className="mb-5"
      >
        <Card.Header>Add Pokemon</Card.Header>
        <Card.Body>
          <PokemonFormInputs />
        </Card.Body>
      </Card>
    )
  }
}

export default AddPokemonForm
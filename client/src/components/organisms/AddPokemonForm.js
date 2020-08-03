import React from 'react'
import { Card, Form } from 'react-bootstrap'

import { POKEMON_TYPE } from '../../constants'

import TextInput from '../molecules/TextInput'
import RadioInput from '../molecules/RadioInput'

class AddPokemonForm extends React.Component {
  render() {
    return (
      <Card
        bg='light'
        key='form'
        text='dark'
        style={{ width: '100%' }}
        className="mb-2"
      >
        <Card.Header>Add Pokemon</Card.Header>
        <Card.Body>
          <Form>
            <TextInput
              controlId='pokemon-name'
              labelName='Pokemon Name'
              placeholder='eg; Bulbasaur etc.,'
            />
            <RadioInput
              controlId='pokemon-type'
              labelName='Pokemon Type'
              radioValues={POKEMON_TYPE}
            />
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default AddPokemonForm
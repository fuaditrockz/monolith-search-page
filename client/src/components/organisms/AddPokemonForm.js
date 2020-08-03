import React from 'react'
import { Card, Form } from 'react-bootstrap'

import { POKEMON_TYPE } from '../../constants'

import TextInput from '../molecules/TextInput'
import RadioInput from '../molecules/RadioInput'

class AddPokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonType: null
    }
    this.onChangePokemonType = this.onChangePokemonType.bind(this)
  }

  onChangePokemonType(e) {
    console.log(e.target.value)
    this.setState({
      pokemonType: e.target.value
    })
  }

  render() {
    const { pokemonType } = this.state 
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
              defaultValue={pokemonType}
              onChangeValue={this.onChangePokemonType}
            />
            <TextInput
              controlId='pokemon-category'
              labelName='Pokemon Category'
              placeholder='eg; Mouse, Rabbit etc.,'
            />
            <TextInput
              controlId='pokemon-image'
              labelName='Pokemon Image'
              placeholder='eg; https://domain.com/image.png'
            />
            <TextInput
              controlId='pokemon-image'
              labelName='Pokemon Image'
              placeholder='eg; https://domain.com/image.png'
            />
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default AddPokemonForm
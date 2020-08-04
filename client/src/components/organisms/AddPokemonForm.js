import React from 'react'
import { Card, Form } from 'react-bootstrap'

import { POKEMON_TYPE } from '../../constants'

import Input from '../molecules/Input'
import RadioInput from '../molecules/RadioInput'

class AddPokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonName: '',
      pokemonType: null
    }
    this.onChangePokemonType = this.onChangePokemonType.bind(this)
  }

  onChangePokemonType(e) {
    this.setState({
      pokemonType: e.target.value
    })
  }

  render() {
    const { pokemonType } = this.state
    console.log(pokemonType)
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
          <Form>
            <Input
              type='text'
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
            <Input
              type='text'
              controlId='pokemon-category'
              labelName='Pokemon Category'
              placeholder='eg; Mouse, Rabbit etc.,'
            />
            <Input
              type='text'
              controlId='pokemon-image'
              labelName='Pokemon Image'
              placeholder='eg; https://domain.com/image.png'
            />
            <Input
              type='text-with-button'
              controlId='pokemon-abilities'
              labelName='Pokemon Abilities'
              placeholder='eg; Change climate etc.,'
              buttonTitle='+ Add Abilities'
            />
            <Input
              type='number'
              controlId='pokemon-catch-rate'
              labelName='Catch Rate'
              placeholder='eg; 20'
              unit='%'
              maxNumber='200'
              isDecimal
            />
            <Input
              type='number'
              controlId='pokemon-height'
              labelName='Height'
              placeholder='eg; 20.5'
              unit='meters'
              maxNumber='10000'
              isDecimal
            />
            <Input
              type='number'
              controlId='pokemon-weight'
              labelName='Weight'
              placeholder='eg; 20'
              unit='kilogram'
              maxNumber='10000'
              isDecimal
            />
            <Input
              type='free-text'
              controlId='pokemon-description'
              labelName='Description'
              placeholder='Some description here...'
            />
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default AddPokemonForm
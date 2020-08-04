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
      pokemonType: null,
      pokemonCategory: '',
      pokemonImage: '',
      pokemonAbilities: [],
      pokemonCatchRate: '',
      pokemonHeight: '',
      pokemonWeight: '',
      pokemonDescription: ''
    }
    this.onChangePokemonType = this.onChangePokemonType.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(e) {
    switch (e.target.id) {
      case 'pokemon-name':
        this.setState({ pokemonName: e.target.value })
        break
      case 'pokemon-category':
        this.setState({ pokemonCategory: e.target.value })
        break
      case 'pokemon-image':
        this.setState({ pokemonImage: e.target.value })
        break
      case 'pokemon-catch-rate':
        this.setState({ pokemonCatchRate: e.target.value })
        break
      case 'pokemon-height':
        this.setState({ pokemonHeight: e.target.value })
        break
      case 'pokemon-weight':
        this.setState({ pokemonWeight: e.target.value })
        break
      case 'pokemon-description':
        this.setState({ pokemonDescription: e.target.value })
        break
      default:
        return null
    }
  }

  onChangePokemonType(e) {
    this.setState({
      pokemonType: e.target.value
    })
  }

  render() {
    const {
      pokemonType,
      pokemonName,
      pokemonCategory,
      pokemonImage,
      pokemonCatchRate,
      pokemonAbilities,
      pokemonHeight,
      pokemonWeight,
      pokemonDescription
    } = this.state

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
              value={pokemonName}
              controlId='pokemon-name'
              labelName='Pokemon Name'
              placeholder='eg; Bulbasaur etc.,'
              onChange={this.onChangeText}
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
              value={pokemonCategory}
              controlId='pokemon-category'
              labelName='Pokemon Category'
              placeholder='eg; Mouse, Rabbit etc.,'
              onChange={this.onChangeText}
            />
            <Input
              type='text'
              value={pokemonImage}
              controlId='pokemon-image'
              labelName='Pokemon Image'
              placeholder='eg; https://domain.com/image.png'
              onChange={this.onChangeText}
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
              value={pokemonCatchRate}
              controlId='pokemon-catch-rate'
              labelName='Catch Rate'
              placeholder='eg; 20'
              unit='%'
              maxNumber='200'
              isDecimal
              onChange={this.onChangeText}
            />
            <Input
              type='number'
              value={pokemonHeight}
              controlId='pokemon-height'
              labelName='Height'
              placeholder='eg; 20.5'
              unit='meters'
              maxNumber='10000'
              isDecimal
              onChange={this.onChangeText}
            />
            <Input
              type='number'
              value={pokemonWeight}
              controlId='pokemon-weight'
              labelName='Weight'
              placeholder='eg; 20'
              unit='kilogram'
              maxNumber='10000'
              isDecimal
              onChange={this.onChangeText}
            />
            <Input
              type='free-text'
              value={pokemonDescription}
              controlId='pokemon-description'
              labelName='Description'
              placeholder='Some description here...'
              onChange={this.onChangeText}
            />
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default AddPokemonForm
import React from 'react'
import {
  Form,
  Row,
  Col,
  Badge,
  Button
} from 'react-bootstrap'
import { FiX } from 'react-icons/fi'

import { AddPokemonContextConsumer } from '../../context/AddPokemonContext'
import { POKEMON_TYPE } from '../../constants'

import Input from '../atoms/Input'
import RadioInput from '../atoms/RadioInput'

const allInputsProps = [
  {
    name: 'Name',
    id: 'pokemon-name',
    state: 'pokemonName',
    type: 'text',
    placeholder: 'eg; Bulbasaur etc.,'
  },
  {
    name: 'Type',
    id: 'pokemon-type',
    state: 'pokemonType',
    type: 'radio',
    allValues: POKEMON_TYPE
  },
  {
    name: 'Category',
    id: 'pokemon-category',
    state: 'pokemonCategory',
    type: 'text',
    placeholder: 'eg; Mouse, Rabbit etc.,'
  },
  {
    name: 'Abilities',
    id: 'pokemon-abilities',
    state: ['pokemonAbilities', 'pokemonAbility'],
    type: 'tags',
    placeholder: 'eg; Change climate etc.,',
    buttonTitle: '+ Add Ability'
  },
  {
    name: 'Image',
    id: 'pokemon-image',
    state: 'pokemonImage',
    type: 'text',
    placeholder: 'eg; https://domain.com/image.png'
  },
  {
    name: 'Catch Rate',
    id: 'pokemon-catch-rate',
    state: 'pokemonCatchRate',
    type: 'number',
    placeholder: 'eg; 20',
    unit: '%',
    maxNumber: '100',
    isDecimal: true
  },
  {
    name: 'Height',
    id: 'pokemon-height',
    state: 'pokemonHeight',
    type: 'number',
    placeholder: 'eg; 20.5',
    unit: 'meters',
    maxNumber: '100000',
    isDecimal: true
  },
  {
    name: 'Weight',
    id: 'pokemon-weight',
    state: 'pokemonWeight',
    type: 'number',
    placeholder: 'eg; 480',
    unit: 'kilos',
    maxNumber: '100000',
    isDecimal: true
  },
  {
    name: 'Description',
    id: 'pokemon-description',
    state: 'pokemonDescription',
    type: 'free-text',
    placeholder: 'Some description here...'
  },
]

export default class PokemonFormInputs extends React.Component {
  renderAllInputs() {
    return allInputsProps.map((input, index) => {
      switch (input.type) {
        case 'text':
          return (
            <AddPokemonContextConsumer key={index}>
              {context => (
                <Input
                  type={input.type}
                  value={context.state[input.state]}
                  controlId={input.id}
                  labelName={input.name}
                  placeholder={input.placeholder}
                  onChange={context.onChangeText}
                />
              )}
            </AddPokemonContextConsumer>
          )
        case 'number':
          return (
            <AddPokemonContextConsumer key={index}>
              {context => (
                <Input
                  type={input.type}
                  value={context.state[input.state]}
                  controlId={input.id}
                  labelName={input.name}
                  placeholder={input.placeholder}
                  unit={input.unit}
                  maxNumber={input.maxNumber}
                  isDecimal={input.isDecimal}
                  onChange={context.onChangeText}
                />
              )}
            </AddPokemonContextConsumer>
          )
        case 'free-text':
          return (
            <AddPokemonContextConsumer key={index}>
              {context => (
                <Input
                  type={input.type}
                  value={context.state[input.state]}
                  controlId={input.id}
                  labelName={input.name}
                  placeholder={input.placeholder}
                  onChange={context.onChangeText}
                />
              )}
            </AddPokemonContextConsumer>
          )
        case 'radio':
          return (
            <AddPokemonContextConsumer key={index}>
              {context => (
                <RadioInput
                  controlId={input.id}
                  labelName={input.name}
                  radioValues={input.allValues}
                  defaultValue={context.state[input.state]}
                  onChangeValue={context.onChangePokemonType}
                />
              )}
            </AddPokemonContextConsumer>
          )
        case 'tags':
          return (
            <AddPokemonContextConsumer key={index}>
              {context => (
                <>
                  <Input
                    type='text-with-button'
                    value={context.state[input.state[1]]}
                    controlId={input.id}
                    labelName={input.name}
                    placeholder={input.placeholder}
                    buttonTitle={input.buttonTitle}
                    onChange={context.onChangeText}
                    onClickInputButton={context.onClickAddAbility}
                    isButtonDisabled={context.state.isAddButtonDisabled}
                  />
                  {context.state.pokemonAbilities.length === 0 ? (
                    null
                  ) : (
                    this.renderTags(context.state[input.state[0]], context.onClickDeleteAbility)
                  )}
                </>
              )}
            </AddPokemonContextConsumer>
          )
        default:
          return null
      }
    })
  }

  renderTags(tags, deleteTag) {
    return (
      <Row className='mb-3'>
        <Col>
          <div className='abilities-list'>
            {tags.map((tag, index) => {
              return (
                <h5 key={index}>
                  <Badge variant="primary" className='mr-2'>
                    {tag}
                    {' '}
                    <a href='!#' onClick={(e) => deleteTag(tag, e)}><FiX color='#fff' size={14} /></a>
                  </Badge>
                </h5>
              )
            })}
          </div>
        </Col>
      </Row>
    )
  }

  renderSaveButton(state, onClick) {
    const {
      pokemonName,
      pokemonType,
      pokemonAbilities,
      pokemonImage,
      pokemonCatchRate,
      pokemonHeight,
      pokemonWeight
    } = state

    const isDisableToSave = (
      !pokemonName
      || !pokemonType
      || pokemonAbilities.length === 0
      || !pokemonImage
      || !pokemonCatchRate
      || !pokemonHeight
      || !pokemonWeight
    )

    return (
      <Row>
        <Col>
          <div className='centerized-item'>
            <Button
              variant={isDisableToSave ? 'secondary' : 'primary'}
              size='lg'
              disabled={isDisableToSave}
              onClick={onClick}
            >
              Save Pokemon
            </Button>
          </div>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <Form>
        {this.renderAllInputs()}
        <AddPokemonContextConsumer>
          {context => this.renderSaveButton(context.state, context.onClickSaveButton)}
        </AddPokemonContextConsumer>
      </Form>
    )
  }
}
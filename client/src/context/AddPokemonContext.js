import React from 'react'

const AddPokemonContext = React.createContext()

export class AddPokemonContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonName: '',
      pokemonType: null,
      pokemonCategory: '',
      pokemonImage: '',
      pokemonAbility: '',
      pokemonAbilities: [],
      pokemonCatchRate: '',
      pokemonHeight: '',
      pokemonWeight: '',
      pokemonDescription: '',
      isAddButtonDisabled: true,
      savedPokemonReponse: {},
      isModalShow: false
    }
    this.clearInput = this.clearInput.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangePokemonType = this.onChangePokemonType.bind(this)
    this.onClickAddAbility = this.onClickAddAbility.bind(this)
    this.onClickDeleteAbility = this.onClickDeleteAbility.bind(this)
    this.onClickSaveButton = this.onClickSaveButton.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  clearInput() {
    this.setState({
      pokemonName: '',
      pokemonType: '',
      pokemonCategory: '',
      pokemonImage: '',
      pokemonAbilities: [],
      pokemonCatchRate: '',
      pokemonHeight: '',
      pokemonWeight: '',
      pokemonDescription: ''
    })
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
      case 'pokemon-abilities':
        this.setState({
          pokemonAbility: e.target.value,
          isAddButtonDisabled: e.target.value ? false : true
        })
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

  onClickAddAbility() {
    const { pokemonAbility, pokemonAbilities } = this.state
    if (pokemonAbility) {
      this.setState({
        pokemonAbility: '',
        pokemonAbilities: [ ...pokemonAbilities, pokemonAbility ],
        isAddButtonDisabled: true
      })
    } else {
      return null
    }
  }

  onClickDeleteAbility(ability, event) {
    event.preventDefault()
    const { pokemonAbilities } = this.state
    const getAblitiyIndex = pokemonAbilities.indexOf(ability)
    this.setState({
      pokemonAbilities: this.state.pokemonAbilities.filter((_, i) => i !== getAblitiyIndex)
    })
  }

  async onClickSaveButton() {
    const {
      pokemonName,
      pokemonType,
      pokemonCategory,
      pokemonAbilities,
      pokemonCatchRate,
      pokemonImage,
      pokemonHeight,
      pokemonWeight,
      pokemonDescription
    } = this.state

    const dataSet = {
      name: pokemonName,
      type: pokemonType,
      category: pokemonCategory,
      image_url: pokemonImage,
      abilities: pokemonAbilities,
      catch_rate: pokemonCatchRate,
      height: pokemonHeight,
      weight: pokemonWeight,
      description: pokemonDescription,
      product_by: 'Pokémon'
    }

    await fetch('/v1/pokemon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataSet)
    })
    .then(response => response.json())
    .then(data => {
      if(!data.error) {
        this.clearInput()
      }
      this.setState({
        savedPokemonReponse: data,
        isModalShow: true
      })
    })
    .catch(err => {
      this.setState({
        savedPokemonReponse: err,
        isModalShow: true
      })
    })
  }

  onCloseModal() {
    this.setState({
      isModalShow: false
    })
  }

  render() {
    return (
      <AddPokemonContext.Provider
        value={{
          state: this.state,
          onChangeText: this.onChangeText,
          onChangePokemonType: this.onChangePokemonType,
          onClickAddAbility: this.onClickAddAbility,
          onClickDeleteAbility: this.onClickDeleteAbility,
          onClickSaveButton: this.onClickSaveButton,
          onCloseModal: this.onCloseModal,
        }}
      >
        {this.props.children}
      </AddPokemonContext.Provider>
    )
  }
}

export class AddPokemonContextConsumer extends React.Component {
  render() {
    return (
      <AddPokemonContext.Consumer>
        {this.props.children}
      </AddPokemonContext.Consumer>
    )
  }
}

import React from 'react'
import { Card } from 'react-bootstrap'

import { AddPokemonContextConsumer } from '../../context/AddPokemonContext'
import PokemonFormInputs from '../molecules/PokemonFormInputs'
import Modal from '../atoms/Modal'

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
        <AddPokemonContextConsumer>
          {context => (
            <Modal
              title='Add Pokemon'
              onClose={context.onCloseModal}
              isModalShow={context.state.isModalShow}
            >
              <p>
                {context.state.savedPokemonReponse.message}
              </p>
              <p>
                {context.state.savedPokemonReponse.objectId}
              </p>
            </Modal>
          )}
        </AddPokemonContextConsumer>
        <Card.Header>Add Pokemon</Card.Header>
        <Card.Body>
          <PokemonFormInputs />
        </Card.Body>
      </Card>
    )
  }
}

export default AddPokemonForm
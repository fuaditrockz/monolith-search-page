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
          {context => {
            const { state, onCloseModal } = context
            const { isModalShow, savedPokemonReponse } = state
            return (
              <Modal
                title='Add Pokemon'
                onClose={onCloseModal}
                isModalShow={isModalShow}
              >
                {savedPokemonReponse.error && (
                  <h4 className='danger'>Error</h4>
                )}
                <p>
                  {
                    !savedPokemonReponse.error
                    ? savedPokemonReponse.message
                    : savedPokemonReponse.message.message
                  }
                </p>
                {!savedPokemonReponse.error && (
                  <p>
                    {savedPokemonReponse.objectId}
                  </p>
                )}
              </Modal>
            )
          }}
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
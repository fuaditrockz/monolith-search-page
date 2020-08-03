import React from 'react'
import { Form } from 'react-bootstrap'

import InputLabel from '../atoms/InputLabel'

const TextInput = ({
  controlId,
  labelName,
  placeholder
}) => {
  return (
    <Form.Group controlId={controlId}>
      <InputLabel title={labelName} />
      <Form.Control type="text" placeholder={placeholder} />
    </Form.Group>
  )
}

export default TextInput
import React from 'react'
import {
  Form,
  InputGroup,
  Button
} from 'react-bootstrap'

import InputLabel from '../atoms/InputLabel'

const TextInputWithButton = ({
  controlId,
  labelName,
  placeholder,
  buttonTitle
}) => {
  return (
    <Form.Group controlId={controlId}>
      <InputLabel title={labelName} />
      <InputGroup>
        <Form.Control type="text" placeholder={placeholder} />
        <InputGroup.Append>
        <Button variant="primary">{buttonTitle}</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  )
}

export default TextInputWithButton
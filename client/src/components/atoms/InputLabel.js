import React from 'react'
import { Form } from 'react-bootstrap'

const InputLabel = ({ title, ...anotherProps }) => {
  return (
    <Form.Label {...anotherProps}>{title}</Form.Label>
  )
}

export default InputLabel
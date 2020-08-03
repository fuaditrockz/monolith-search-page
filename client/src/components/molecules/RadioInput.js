import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

import InputLabel from '../atoms/InputLabel'

const RadioInput = ({
  controlId,
  labelName,
  radioValues
}) => {
  const renderValueList = (values) => {
    return values.map((type, index) => {
      return (
        <Col md={2}>
          <Form.Check
            key={index}
            type="radio"
            label={type}
            name={type.toLocaleLowerCase()}
            id={type.toLowerCase()}
          />
        </Col>
      )
    })
  }

  return (
    <fieldset>
      <Form.Group as={Row} controlId={controlId}>
        <InputLabel title={labelName} as="legend" column sm={2} />
        <Col sm={12}>
          <Row>
            {renderValueList(radioValues)}
          </Row>
        </Col>
      </Form.Group>
    </fieldset>
  )
}

export default RadioInput
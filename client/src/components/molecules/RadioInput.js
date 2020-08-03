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
          <div className='radio-pokemon-type mb-3'>
            <Form.Check
              key={index}
              type="radio"
              name={type.name.toLocaleLowerCase()}
              id={type.name.toLowerCase()}
            />
            <img src={type.icon} width={20} />
            <p className='mb-0 ml-1'>{type.name}</p>
          </div>
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
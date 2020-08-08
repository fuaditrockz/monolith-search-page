import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

import Label from '../atoms/Label'

const RadioInput = ({
  controlId,
  labelName,
  radioValues,
  defaultValue,
  onChangeValue
}) => {
  const renderValueList = (values) => {
    return values.map((type, index) => {
      return (
        <Col md={2} key={index}>
          <div className='radio-pokemon-type mb-3'>
            <Form.Check
              type="radio"
              value={type.name}
              checked={defaultValue === type.name}
              name={type.name.toLocaleLowerCase()}
              id={type.name.toLowerCase()}
              onChange={onChangeValue}
            />
            <img src={type.icon} width={20} alt={type.name} />
            <p className='mb-0 ml-1'>{type.name}</p>
          </div>
        </Col>
      )
    })
  }

  return (
    <fieldset>
      <Form.Group as={Row} controlId={controlId}>
        <Label title={labelName} as="legend" column sm={2} />
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
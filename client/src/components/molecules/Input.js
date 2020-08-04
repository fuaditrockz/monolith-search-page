import React from 'react'
import {
  Form,
  InputGroup,
  Button
} from 'react-bootstrap'
import InputLabel from '../atoms/InputLabel'

export default class Input extends React.Component {
  renderInput() {
    const {
      type,
      placeholder,
      buttonTitle,
      isDecimal,
      maxNumber,
      unit,
      value,
      onChange
    } = this.props
    switch (type) {
      case 'text':
        return (
          <Form.Control
            type={type}
            placeholder={placeholder}
            defaultValue={value}
            onChange={onChange}
          />
        )
      case 'number':
        return (
          <InputGroup>
            <Form.Control
              type={type}
              defaultValue={value}
              placeholder={placeholder}
              step={isDecimal && '0.01'}
              min={isDecimal && '0'}
              max={isDecimal && (maxNumber ? maxNumber : '100')}
              onChange={onChange}
            />
            <InputGroup.Append>
              <InputGroup.Text>{unit}</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        )
      case 'text-with-button':
        return (
          <InputGroup>
            <Form.Control
              type="text"
              placeholder={placeholder}
              defaultValue={value}
              onChange={onChange}
            />
            <InputGroup.Append>
              <Button variant="primary">{buttonTitle}</Button>
            </InputGroup.Append>
          </InputGroup>
        )
      case 'free-text':
        return (
          <Form.Control
            as="textarea"
            defaultValue={value}
            aria-label="With textarea"
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      default:
        return (
          <Form.Control
            type='text'
            placeholder={placeholder}
            defaultValue={value}
            onChange={onChange}
          />
        )
    }
  }

  render() {
    const { controlId, labelName } = this.props    
    return (
      <Form.Group controlId={controlId}>
        <InputLabel title={labelName} />
        {this.renderInput()}
      </Form.Group>
    )
  }
}
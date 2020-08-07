import React from 'react'
import {
  Modal as RBModal,
  Button
} from 'react-bootstrap'

export default class Modal extends React.Component {
  render() {
    const {
      title,
      children,
      onClose,
      isModalShow
    } = this.props
    return (
      <RBModal
        show={isModalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <RBModal.Header closeButton>
          <RBModal.Title id="contained-modal-title-vcenter">
            {title}
          </RBModal.Title>
        </RBModal.Header>
        <RBModal.Body>
          {children}
        </RBModal.Body>
        <RBModal.Footer>
          <Button onClick={onClose}>Close</Button>
        </RBModal.Footer>
      </RBModal>
    )
  }
}
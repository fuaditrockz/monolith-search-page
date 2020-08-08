import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Header from '../components/organisms/Header'

export default class SearchScreen extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header isSearchHeader />
        <Container>
          <Row>
            <h1>Hello World</h1>
          </Row>
        </Container>
      </Container>
    )
  }
}
import React from 'react'
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Nav
} from 'react-bootstrap'
import Header from '../components/Header'

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ytimg.com/vi/L4y_C4Ik92c/maxresdefault.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default HomeScreen

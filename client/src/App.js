import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Container, Row, } from 'react-bootstrap'
import Header from './components/organisms/Header'

import HomeScreen from './containers/HomeScreen'

function App() {
  return (
    <Router>
      <Container fluid>
        <Header />
      </Container>
      <Switch>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

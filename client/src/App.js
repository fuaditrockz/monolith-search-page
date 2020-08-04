import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/organisms/Header'

import HomeScreen from './containers/HomeScreen'
import AddPokemonScreen from './containers/AddPokemonScreen'

function App() {
  return (
    <Router>
      <Container fluid>
        <Header />
      </Container>
      <Switch>
        <Route path='/add-pokemon'>
          <AddPokemonScreen />
        </Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

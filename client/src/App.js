import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from './containers/HomeScreen'
import AddPokemonScreen from './containers/AddPokemonScreen'
import ShowPokemonScreen from './containers/ShowPokemonScreen'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/add-pokemon'>
            <AddPokemonScreen />
          </Route>
          <Route path='/:pokemon_id' component={ShowPokemonScreen} />
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

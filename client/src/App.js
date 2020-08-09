import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from './containers/HomeScreen'
import AddPokemonScreen from './containers/AddPokemonScreen'
import SearchScreen from './containers/SearchScreen'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/add-pokemon' component={AddPokemonScreen} />
          <Route path='/search-pokemon' component={SearchScreen} />
          <Route path='/' component={HomeScreen} />
        </Switch>
      </Router>
    )
  }
}

export default App;

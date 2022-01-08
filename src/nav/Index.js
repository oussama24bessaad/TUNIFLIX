import MovieCard from '../Component/MovieCard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route path='/movie/:id' children={<MovieCard />}>
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup;

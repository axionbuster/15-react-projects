import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import BirthdaysApp from './00-birthdays/App'
import ToursApp from './01-tours/App'
import ReviewsApp from './02-reviews/App'

const Index = () => {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/birthdays'>Birthdays</Link>
            </li>
            <li>
              <Link to='/tours'>Tours</Link>
            </li>
            <li>
              <Link to='/reviews'>Reviews</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/birthdays'>
            <BirthdaysApp />
          </Route>
          <Route path='/tours'>
            <ToursApp />
          </Route>
          <Route path='/reviews'>
            <ReviewsApp />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

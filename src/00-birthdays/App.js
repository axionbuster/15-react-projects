import React, { useState } from 'react'
import List from './List'

import birthdays from '../data/birthdays'

import './App.css'

const App = () => {
  const [people, setPeople] = useState(birthdays)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App

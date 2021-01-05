import React from 'react'
import ReactDOM from 'react-dom'

import BirthdaysApp from './00-birthdays/App'

const Index = () => {
  return (
    <div>
      <BirthdaysApp />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

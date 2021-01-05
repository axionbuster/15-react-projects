import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'

import './index.css'

const url = 'https://course-api.com/react-tours-project'

const ToursApp = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const myTours = await response.json()
      setTours(myTours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  // Only run once after rendering
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button type='button' className='btn' onClick={fetchTours}>
          Fetch Tours
        </button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default ToursApp

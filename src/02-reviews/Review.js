/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa'
import people from './data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const numberBound = (i) => {
    if (i > people.length - 1) return 0
    if (i < 0) return people.length - 1
    return i
  }

  const nextPerson = () => {
    setIndex((oldIndex) => numberBound(oldIndex + 1))
  }
  const prevPerson = () => {
    setIndex((oldIndex) => numberBound(oldIndex - 1))
  }
  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length)
    setIndex(randomNumber)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me!
        </button>
      </div>
    </article>
  )
}

export default Review

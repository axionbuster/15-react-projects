import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import PropTypes from 'prop-types'

const SingleQuestion = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false)
  const { title, info } = question
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : null}
    </article>
  )
}

SingleQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
  })
}

export default SingleQuestion

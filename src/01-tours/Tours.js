import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }),
  removeTour: PropTypes.func.isRequired
}

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

Tours.propTypes = {
  tours: PropTypes.arrayOf(Tour.propTypes.tour),
  removeTour: PropTypes.func.isRequired
}

export default Tours

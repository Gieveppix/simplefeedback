import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    //Calculater ratings avg
    let average = feedback.reduce((accumulator, current) => {
        return (accumulator + current.rating)
    }, 0) / feedback.length //defaultAccumulator = 0

    average = average
    .toFixed(1) //Fix only one decimal number
    .replace(/[.,]0$/, '')  //If decimal = 0 than dont show it

  return (
    <div className='feedback-stats'>
        <h4>{FeedbackStats.lenght} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback }  = useContext(FeedbackContext)

    //Calculater ratings avg
    let average = feedback.reduce((accumulator, current) => {
        return (accumulator + current.rating)
    }, 0) / feedback.length //defaultAccumulator = 0

    average = average
    .toFixed(1) //Fix only one decimal number
    .replace(/[.,]0$/, '')  //If decimal = 0 than dont show it

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.lenght === 0) {
        return <p>No feedback yet</p>
    }


    return (
        <div className='feedback-List'>
            {feedback.map((item) => (
                <FeedbackItem 
                    key={item.id} item={item} 
                    handleDelete={handleDelete} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList;
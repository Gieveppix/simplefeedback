import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-List'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                <FeedbackItem 
                    key={item.id} item={item} 
                    handleDelete={handleDelete} />
                    </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className='feedback-List'>
    //         {feedback.map((item) => (
    //             <FeedbackItem 
    //                 key={item.id} item={item} 
    //                 handleDelete={handleDelete} />
    //         ))}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired, //changed because of uuid
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList;
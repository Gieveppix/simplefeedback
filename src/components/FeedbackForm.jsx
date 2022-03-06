import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => { //event
        if(text === '') {
            setBtnDisabled(true)
            setMessage('')
        } else if(text !== '' && text.trim().length <= 9) {
            setMessage('Text must be at least 10 characters long')
            setBtnDisabled(true)
        } else {
            setMessage('')
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>
                How would you rate your service with us?
            </h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextChange} type='text' placeholder='Write a review' />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
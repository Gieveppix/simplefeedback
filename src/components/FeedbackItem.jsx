import React from 'react'
import Card from './shared/Card';

function FeedbackItem({ item }) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-dislay">{item.text}</div>
        </Card>
  )
}

export default FeedbackItem;
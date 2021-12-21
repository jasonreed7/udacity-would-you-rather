import React from 'react'

export default function QuestionResultOption(props) {
    const receivedVotes = props.question[props.option].votes.length
    const totalVotes = props.question['optionOne'].votes.length + props.question['optionTwo'].votes.length
    const percentage = Math.round((receivedVotes / totalVotes) * 100)
    return (
        <div className={isSelected(props.question, props.option, props.authedUser) ? 'card result-option-card mb-3 selected' : 'card result-option-card mb-3'} >
            <div className='card-body'>
                <div className='card-text'>{props.question[props.option].text}</div>
                <div className='card-text'>{receivedVotes} out
                    of {totalVotes} votes ({percentage}%)</div>
            </div>
        </div>
    )
}

function isSelected(question, option, authedUser) {
    return question[option].votes.includes(authedUser)
}
import React from 'react'
import authedUser from './../reducers/authedUser';

export default function QuestionResultOption(props) {
    return (
        <div class={isSelected(props.question, props.option, props.authedUser) ? 'card result-option-card mb-3 selected' : 'card result-option-card mb-3'} >
            <div class='card-body'>
                <div class='card-text'>{props.question[props.option].text}</div>
                <div class='card-text'>{props.question[props.option].votes.length} out
                    of {props.question['optionOne'].votes.length + props.question['optionTwo'].votes.length} votes</div>
            </div>
        </div>
    )
}

function isSelected(question, option, authedUser) {
    return question[option].votes.includes(authedUser)
}
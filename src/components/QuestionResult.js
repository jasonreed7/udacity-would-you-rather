import React from 'react'
import QuestionResultOption from './QuestionResultOption'
import authedUser from './../reducers/authedUser';

export default function QuestionResult(props) {
    return (
        <div className='card-body'>
            <div className="card-text fw-bold mb-3">Results:</div>
            <div>
                <QuestionResultOption question={props.question} authedUser={props.authedUser} option='optionOne' />
                <QuestionResultOption question={props.question} authedUser={props.authedUser} option='optionTwo' />
            </div>
        </div>
    )
}

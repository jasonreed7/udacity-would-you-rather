import React, { Fragment } from 'react'
import QuestionItem from "./QuestionItem";

export default function QuestionList(props) {
    return (
        <Fragment>
            {props.questions.map(question => <QuestionItem question={question} key={question.id} />)}
        </Fragment>
    )
}

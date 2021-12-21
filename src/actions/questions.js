import { _saveQuestion, _saveQuestionAnswer } from "../utils/api"
import { showLoading, hideLoading } from "react-redux-loading"
import authedUser from './../reducers/authedUser';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAnswerQuestion(questionId, selectedOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return _saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer: selectedOption
        })
            .then(() => dispatch(answerQuestion(authedUser, questionId, selectedOption)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}
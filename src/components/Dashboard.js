import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList';

class Dashboard extends Component {
    state = {
        answered: false
    }
    setAnswered = (answered) => {
        this.setState({
            answered
        })
    }
    getSelectedQuestions = () => {
        return this.state.answered ? this.props.answeredQuestions : this.props.unansweredQuestions
    }
    render() {
        return (
            <div className='card'>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a
                                className={this.state.answered ? 'nav-link cursor-pointer' : 'nav-link cursor-pointer active'}
                                onClick={() => this.setAnswered(false)}>
                                Unanswered
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={this.state.answered ? 'nav-link cursor-pointer active' : 'nav-link cursor-pointer'}
                                onClick={() => this.setAnswered(true)}>
                                Answered
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='card-body'>
                    <QuestionList questions={this.getSelectedQuestions()} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    return {
        answeredQuestions: getAnsweredQuestions(questions, authedUser, true),
        unansweredQuestions: getAnsweredQuestions(questions, authedUser, false)
    }
}

function getAnsweredQuestions(questions, authedUser, findAnswered) {
    return Object.entries(questions).map(([id, question]) => question)
        .filter(question => {
            const isAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
            return isAnswered === findAnswered
        }).sort((a, b) => b.timestamp - a.timestamp)
}

export default connect(mapStateToProps)(Dashboard)
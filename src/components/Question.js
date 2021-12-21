import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import QuestionForm from './QuestionForm';
import QuestionResult from './QuestionResult';
import QuestionNotFound from './QuestionNotFound';

class Question extends Component {
    render() {
        if (!this.props.question) {
            return <QuestionNotFound />
        }
        return (
            <div className='card'>
                <div className='card-header'>
                    <div className='fw-bold'>{this.props.answered ? `${this.props.author.name} asks:` : `Asked by ${this.props.author.name}`}</div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-4 d-flex align-items-center">
                        <img src={this.props.author.avatarURL} className="img-fluid rounded-start img-avatar" />
                    </div>
                    <div className="col-8">
                        {this.props.answered ? (
                            <QuestionResult question={this.props.question} authedUser={this.props.authedUser} />
                        ) : (
                            <QuestionForm question={this.props.question} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const questionId = props.match.params.questionId

    if (!questions[questionId]) {
        return {
            question: null
        }
    }

    return {
        question: questions[questionId],
        author: users[questions[questionId].author],
        answered: questions[questionId].optionOne.votes.includes(authedUser) ||
            questions[questionId].optionTwo.votes.includes(authedUser),
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Question))
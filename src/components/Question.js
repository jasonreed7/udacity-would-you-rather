import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAnswerQuestion } from './../actions/questions';
import QuestionResult from './QuestionResult';

class Question extends Component {
    state = {
        selectedOption: 'optionOne'
    }
    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAnswerQuestion(this.props.question.id, this.state.selectedOption))
    }
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    <div className='fw-bold'>{this.props.author.name} asks:</div>
                </div>
                <div className="row g-0">
                    <div className="col-4 p-4 d-flex align-items-center">
                        <img src={this.props.author.avatarURL} className="img-fluid rounded-start img-avatar" />
                    </div>
                    <div className="col-8">
                        {this.props.answered ? (
                            <QuestionResult question={this.props.question} authedUser={this.props.authedUser} />
                        ) : (
                            <div className="card-body">
                                <div className="card-text fw-bold mb-3">Would you rather</div>
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="selectedOption"
                                                id="selectedOption1"
                                                value='optionOne'
                                                checked={this.state.selectedOption === 'optionOne'}
                                                onChange={this.handleChange}
                                            />
                                            <label className="form-check-label" for="selectedOption1">
                                                {this.props.question.optionOne.text}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="selectedOption"
                                                id="selectedOption2"
                                                value='optionTwo'
                                                checked={this.state.selectedOption === 'optionTwo'}
                                                onChange={this.handleChange}
                                            />
                                            <label className="form-check-label" for="selectedOption2">
                                                {this.props.question.optionTwo.text}
                                            </label>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button className='btn btn-outline-primary' type='submit'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const questionId = props.match.params.questionId
    return {
        question: questions[questionId],
        author: users[questions[questionId].author],
        answered: questions[questionId].optionOne.votes.includes(authedUser) ||
            questions[questionId].optionTwo.votes.includes(authedUser),
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Question))
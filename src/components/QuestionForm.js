import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from './../actions/questions';

class QuestionForm extends Component {
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
                            <label className="form-check-label" htmlFor="selectedOption1">
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
                            <label className="form-check-label" htmlFor="selectedOption2">
                                {this.props.question.optionTwo.text}
                            </label>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <button className='btn btn-outline-primary' type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(QuestionForm)
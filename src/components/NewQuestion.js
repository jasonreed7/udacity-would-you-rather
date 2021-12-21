import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from './../actions/questions';
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }
    handleOptionOneChange = (e) => {
        const optionOneText = e.target.value

        this.setState(() => ({
            optionOneText
        }))
    }
    handleOptionTwoChange = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            toHome: true
        }))
    }
    render() {
        const { optionOneText, optionTwoText, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='card' >
                <div className='card-header'>
                    <div className='fw-bold'>Create New Question</div>
                </div>
                <div className='card-body'>
                    <div className='card-text mb-4'>Complete the question:</div>
                    <div className='card-text fw-bold mb-3'>Would you rather...</div>
                    <form className='new-question' onSubmit={this.handleSubmit}>
                        <input type='text'
                            placeholder='Enter Option One Text Here'
                            value={optionOneText}
                            onChange={this.handleOptionOneChange}
                            className='form-control mb-3'
                        />
                        <div className='card-text fw-bold text-center mb-3'>OR</div>
                        <input type='text'
                            placeholder='Enter Option Two Text Here'
                            value={optionTwoText}
                            onChange={this.handleOptionTwoChange}
                            className='form-control mb-3'
                        />
                        <div className='d-grad gap-2'>
                            <button
                                className='btn btn-primary'
                                type='submit'
                                disabled={optionOneText === '' || optionTwoText === ''}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
    state = {
        selectedUser: '',
        toHome: false
    }
    handleChange = (e) => {
        const selectedUser = e.target.value

        this.setState(() => ({
            selectedUser
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { selectedUser } = this.state
        const { dispatch, id } = this.props

        dispatch(setAuthedUser(selectedUser))

        this.setState(() => ({
            toHome: true
        }))
    }
    render() {
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='card text-center mt-5' >
                <div className='card-header'>
                    <div className='fw-bold'>Welcome to the Would You Rather App!</div>
                    <div>Please sign in to continue</div>
                </div>
                <div className='card-body'>
                    <h4 className className='mb-3'>Sign in</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className='mb-3'>
                            <select className='form-select' value={this.state.selectedUser} onChange={this.handleChange}>
                                <option disabled value=''>Select User</option>
                                {
                                    Object.entries(this.props.users).map(([id, user]) => (
                                        <option value={id} key={id}>{user.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-primary' disabled={this.state.selectedUser === ''}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LoginPage)
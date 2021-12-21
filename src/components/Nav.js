import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser';

class Nav extends Component {
    logout = () => {
        this.props.dispatch(logout())
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' exact className='nav-link' activeClassName='active'>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/add' exact className='nav-link' activeClassName='active'>
                                    New Question
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/leaderboard' exact className='nav-link' activeClassName='active'>
                                    Leader Board
                                </NavLink>
                            </li>
                        </ul>
                        <div className="navbar-text">
                            Hello, {this.props.authedUser.name}
                            <img src={this.props.authedUser.avatarURL} width="30" height="24" className='ms-3' />
                        </div>
                        <button className='btn btn-light' onClick={this.logout}>Logout</button>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)
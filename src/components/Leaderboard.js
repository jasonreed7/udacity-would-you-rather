import React from 'react'
import { connect } from 'react-redux'
import User from './User';

function Leaderboard(props) {
    return (
        <div>
            {props.users.map((user, index) => <User user={user} index={index} key={user.id} />)}
        </div>
    )
}

function mapStateToProps({ users }) {
    return {
        users: Object.entries(users).map(([id, user]) => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            numQuestions: user.questions.length,
            numAnswers: Object.keys(user.answers).length
        })).sort((a, b) => (b.numQuestions + b.numAnswers) - (a.numQuestions + a.numAnswers))
    }
}

export default connect(mapStateToProps)(Leaderboard)
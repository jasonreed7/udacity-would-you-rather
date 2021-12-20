import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function QuestionItem(props) {
    return (
        <div className='card nested-card mb-3'>
            <div className='card-header'>
                <div className='fw-bold'>{props.author.name} asks:</div>
            </div>
            <div className="row g-0">
                <div className="col-4 p-4">
                    <img src={props.author.avatarURL} className="img-fluid rounded-start img-avatar" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <div className="card-text fw-bold">Would you rather</div>
                        <div className="card-text">...{props.question.optionOne.text.substring(0, 15)}...</div>
                        <div className="d-grid gap-2 mt-2">
                            <Link to={`/questions/${props.question.id}`} className="btn btn-outline-primary">
                                View Poll
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({ users }, { question }) {
    return {
        question,
        author: users[question.author]
    }
}

export default connect(mapStateToProps)(QuestionItem)
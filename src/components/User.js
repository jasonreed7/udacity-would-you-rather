import React from 'react'

export default function User(props) {
    return (
        <div className='card mb-3'>
            <div className="row g-0">
                <div className="col-2 d-flex align-items-center">
                    <img src={props.user.avatarURL} className="img-fluid rounded-start img-avatar mx-auto d-block" />
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h4>{props.user.name}</h4>
                        <div className='row fw-bold'>
                            <div className='col-10'>Answered Questions</div>
                            <div className='col-2 text-right'>{props.user.numAnswers}</div>
                        </div>
                        <div className='row fw-bold'>
                            <div className='col-10'>Created Questions</div>
                            <div className='col-2 text-right'>{props.user.numQuestions}</div>
                        </div>
                    </div>
                </div>
                <div className='col-3 d-flex align-items-center justify-content-center'>
                    <div className='card score-card m-1 text-center'>
                        <div className='card-header'>Score</div>
                        <div className='card-body'>{props.user.numAnswers + props.user.numQuestions}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

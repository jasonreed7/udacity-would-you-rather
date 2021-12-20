import './App.css';
import { Component, Fragment } from 'react';
import { LoadingBar } from 'react-redux-loading';
import { connect } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { handleInitialData } from './actions/shared';
import authedUser from './reducers/authedUser';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <LoadingBar />
        <div className='container d-flex justify-content-center'>
          {
            this.props.authedUser ?
              (<div>Hi</div>) :
              (
                <Switch>
                  <Route exact path='/login'>
                    <LoginPage />
                  </Route>
                  <Route path='*'>
                    <Redirect to='/login' />
                  </Route>
                </Switch>
              )
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(App);

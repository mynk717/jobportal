import './App.css';
import Home from './components/homepage/Home';
import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualJobPage from './components/individualjobpage/IndividualJobPage';
import PostReviewPage from './components/PostReviewPage';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <Fragment>
       <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/profile" component={UserProfile}/>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/jobs/:id" component={IndividualJobPage} />
                    <Route exact path="/review/:id" component={PostReviewPage} />
                </Switch>
            </Router>
    </Fragment>
  );
}

export default App;

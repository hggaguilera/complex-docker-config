import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './app';
import OtherPage from './other-page';

ReactDOM.render(
  <Router>
    <div className="absolute bottom-3.5 right-3.5">
      <Link className="mr-2" to="/">Home</Link>
      <Link to="/other-page">Other Page</Link>
    </div>
    <Route exact path="/" component={App} />
    <Route path="/other-page" component={OtherPage} />
  </Router>,
  document.getElementById('root'),
);

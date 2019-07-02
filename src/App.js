import React from 'react';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegPage from './components/RegPage';
import Posts from './components/Posts';

import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch } from 'react-router';

const history = createBrowserHistory();

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/loginPage">LoginPage</Link></li>
                        <li><Link to="/regPage">RegPage</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/loginPage" component={LoginPage} />
                        <Route path="/regPage" component={RegPage} />
                        <Route path="/posts" component={Posts} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;
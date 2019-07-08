import React from 'react';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegPage from './components/RegPage';
import Posts from './components/Posts';

import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch } from 'react-router';
import { Layout, Menu } from "antd";

const { Header } = Layout;

const history = createBrowserHistory();

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Layout>
                        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                            <Menu theme="dark"
                                  mode="horizontal"
                                  defaultSelectedKeys={['2']}
                                  style={{ lineHeight: '64px' }}>
                            <Menu.Item><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item><Link to="/loginPage">LoginPage</Link></Menu.Item>
                            <Menu.Item><Link to="/regPage">RegPage</Link></Menu.Item>
                            <Menu.Item><Link to="/posts">Posts</Link></Menu.Item>
                            </Menu>
                        </Header>
                    </Layout>
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
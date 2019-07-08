import React from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import { Input, Button, Layout, Form } from 'antd';

const { Content } = Layout;

class RegPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        axios.post('http://localhost:3000/api/users', {"user":{"username": this.state.username, "email": this.state.email, "password": this.state.password}})
            .then(response => {
                console.log(response);
            });
        this.setState({
            username:'',
            email: '',
            password: ''
        });
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    onChangeLogin(event) {
        this.setState({username: event.target.value});
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    render() {
        return (
            <div className='RegPage'>
                <Helmet>
                    <title>RegPage</title>
                    <meta name="description" content="regPage"/>
                </Helmet>
                <Layout>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Form onSubmit={this.handleSubmit}>
                    <p><label> Логин: <Input name="username" value={this.state.username}
                                             onChange={this.onChangeLogin}/></label></p>
                    <p><label> Пароль: <Input name="password" value={this.state.password}
                                              onChange={this.onChangePassword}/></label></p>
                    <p><label> E-mail: <Input name="email" value={this.state.email}
                                              onChange={this.onChangeEmail}/></label></p>
                    <p><Button type="primary">Submit</Button></p>
                </Form>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default RegPage;
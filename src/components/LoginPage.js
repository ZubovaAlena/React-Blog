import React from 'react';
import {Helmet} from 'react-helmet';
import axios from "axios/index";
import { Input, Button, Layout, Form } from "antd";

const { Content } = Layout;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        axios.post('http://localhost:3000/api/users/login', {"user":{"email": this.state.email,"password": this.state.password}})
            .then(response => {
                console.log(response);
                const token= response.data.user.token;
                this.setState({ token});
                localStorage.setItem('token', token );
            });
        localStorage.setItem('email', this.state.email );
        this.setState({
            email: '',
            password: ''
        });
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    onChangeLogin(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div className='LoginPage'>
                <Helmet>
                    <title>LoginPage</title>
                    <meta name="description" content="loginPage"/>
                </Helmet>
                <div>
                    <Layout>
                        <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <p><label> Логин: <Input name="email" value={this.state.email}
                                                 onChange={this.onChangeLogin}/></label></p>
                        <p><label> Пароль: <Input name="password" value={this.state.password}
                                                  onChange={this.onChangePassword}/></label></p>

                        <p><Button type="primary">Submit</Button></p>
                    </Form>
                        </Content>
                    </Layout>
                </div>
            </div>
        )
    };
}
export default LoginPage;
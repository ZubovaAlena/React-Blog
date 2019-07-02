import React from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';

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
                <form onSubmit={this.handleSubmit}>
                    <p><label> Логин: <input type="text" name="username" value={this.state.username}
                                             onChange={this.onChangeLogin}/></label></p>
                    <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                                              onChange={this.onChangePassword}/></label></p>
                    <p><label> E-mail: <input type="email" name="email" value={this.state.email}
                                              onChange={this.onChangeEmail}/></label></p>
                    <p><input type="submit" value="Submit"  /></p>
                </form>
            </div>
        )
    }
}

export default RegPage;
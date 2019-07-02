import React from 'react';
import {Helmet} from 'react-helmet';
import axios from "axios/index";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            body: '',
            tagList:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangeTagList = this.onChangeTagList.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        axios.post('http://localhost:3000/api/articles', {"article":{"title": this.state.title,"description": this.state.description,"body": this.state.body,"tagList": this.state.tagList}})
            .then(response => {
                console.log(response);
            });
        this.setState({
            title: '',
            description: '',
            body: '',
            tagList:''
        });
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    onChangeTitle(event){
        this.setState({password: event.target.value});
    }

    onChangeDescription(event) {
        this.setState({username: event.target.value});
    }

    onChangeBody(event) {
        this.setState({email: event.target.value});
    }
    onChangeTagList(event) {
        this.setState({email: event.target.value});
    }
    render(){
        return (
            <div className='Posts'>
                <Helmet>
                    <title>Posts</title>
                    <meta name="description" content="posts"/>
                </Helmet>
                <div>
                    <div>напишите здесь свой пост</div>
                    <form onSubmit={this.handleSubmit}>
                        <p><label> Title: <input type="title" name="title" value={this.state.title}
                                                 onChange={this.onChangeTitle}/></label></p>
                        <p><label> Description: <textarea name="description" value={this.state.description}
                                                  onChange={this.onChangeDescription}/></label></p>
                        <p><label> Body: <textarea name="body" value={this.state.body}
                                                 onChange={this.onChangeBody}/></label></p>
                        <p><label> TagList: <textarea name="tagList" value={this.state.tagList}
                                                       onChange={this.onChangeTagList}/></label></p>
                        <p><input type="submit" value="Опубликовать" /></p>
                    </form>
                </div>
            </div>
        )
    }
}


export default (Posts);
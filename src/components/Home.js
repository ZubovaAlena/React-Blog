import React from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import { Layout } from 'antd';

const { Content } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/articles?limit=10&offset=0')
            .then(response => {
                const posts= response.data.articles;
                this.setState({ posts});
            })
    }
    render() {
        const Post = this.state.posts;
        return (
            <div className='Home'>
                <Helmet>
                    <title>Posts</title>
                    <meta name="description" content="home" />
                </Helmet>
                <Layout>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div>
                    {Post.map((post) =>
                        <div key={post.slug}>
                            {<h3>{post.title}{post.createdAt}</h3>}
                        </div>
                    )}
                </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Home;
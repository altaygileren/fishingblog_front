import React, { Component } from 'react'
import axios from 'axios';
import Loading from '../../utils/Loading';
import './single.blog.css';
import moment from 'moment';

export default class Singleblog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      singleBlog: {},
      isLoading: true
    }
  }

  componentDidMount = async () => {
    const blogs = await axios.get(`${process.env.REACT_APP_BASE}/blogs?slug=${this.props.match.params.slug}`)
    this.setState({ singleBlog: blogs.data[0], isLoading: false }, () => console.log(this.state.singleBlog))
  }
  render() {
    let { isLoading, singleBlog } = this.state;
    return !isLoading ? (
      <div className="single-blog-div">
        <img src={singleBlog.img ? (singleBlog.img.url) : (null)} />
        <h1>{singleBlog.title}</h1>
        <div className='single-blog-created-div'>
          {moment(singleBlog.createdAt).format('LL')}
        </div>
        <article className="single-blog-content-div">
          {singleBlog.content}
        </article>
      </div>
    ) : (<Loading />)
  }
}

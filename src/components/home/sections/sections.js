import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './sections.styles.css';

const Sections = ({ blogPosts, title }) => {
  return (
    <div>
      <h6>{title}</h6>
      <hr />
      {
        blogPosts.map((blog) => (
          <div>
            <a href={`blogs/${blog.slug}`}>
              <div className="side-blogs-div">
                <img src={blog.img ? (blog.img.url) : (null)} />
              </div>
              <h6>
                {blog.title}
              </h6>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Sections;
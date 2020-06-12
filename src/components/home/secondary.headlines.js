import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './sections/sections.styles.css';

const Secondary = ({ blogPosts }) => {
  return (
    <div>
      <Row>
        {
          blogPosts.map((blog) => (
            <Col lg={3}>
              <a href={`blogs/${blog.slug}`}>
                <div className="side-blogs-div">
                  <img src={blog.img ? (blog.img.url) : (null)} />
                </div>
                <h6>
                  {blog.title}
                </h6>
              </a>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Secondary;
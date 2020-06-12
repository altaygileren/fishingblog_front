import React, { useEffect, useState } from 'react'
import Latestblog from '../blogs/latest.blog';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './home.styles.css';
import Headline from './headline';
import Sections from './sections/sections';
import Secondary from './secondary.headlines';

const Home = () => {
  const [diyBlogs, setDiyBlogs] = useState([]);
  const [cookingBlogs, setCookingBlogs] = useState([]);
  const [fishingBlogs, setFishingBlogs] = useState([]);
  const [headline, setHeadline] = useState({});
  useEffect(() => {
    const allBlogs = async () => {
      const blogPosts = await axios.get(`${process.env.REACT_APP_BASE}/allblogs`)
      setDiyBlogs(blogPosts.data.diy);
      setCookingBlogs(blogPosts.data.cooking);
      setFishingBlogs(blogPosts.data.fishing);
      setHeadline(blogPosts.data.headline);
    }
    allBlogs();
  }, [])
  return (
    <div className="home-div">
      <Row>
        <Col lg={9}>
          <div>
            <Headline headline={headline} />
          </div>
          <div>
            <Secondary
              blogPosts={fishingBlogs}
            />
          </div>
        </Col>
        <Col lg={3}>
          <Sections
            title={'Cooking'}
            blogPosts={cookingBlogs}
          />
          <Sections
            title={'DIY'}
            blogPosts={diyBlogs}
          />
        </Col>
      </Row>
      <Latestblog />
    </div>
  )
}

export default Home; 
import React from 'react'
import moment from 'moment';
import './home.styles.css';

const Headline = ({ headline }) => {
  return (
    <div className="headline-div">
      <a href={`/blogs/${headline.slug}`}>
        <div className="headline-div-img">
          <img src={headline.img ? (headline.img.url) : (null)} />
        </div>
        <h1>{headline.title}</h1>
        <p className="">{moment(headline.createdAt).format('LL')}</p>
        <article className='headline-article'>{headline.content}</article>
      </a>
      <hr />
    </div>
  )
}

export default Headline;
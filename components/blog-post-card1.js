import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard1 = (props) => {
  return (
    <>
      <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
        <div className="blog-post-card1-image1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc1}
            className="blog-post-card1-image2"
          />
        </div>
        <div className="blog-post-card1-container1">
          <span className="blog-post-card1-text1">{props.label}</span>
          <span className="blog-post-card1-text2">{props.title}</span>
          <span className="blog-post-card1-text3">{props.description}</span>
          <div className="blog-post-card1-container2">
            <div className="blog-post-card1-profile">
              <div className="blog-post-card1-container3"></div>
              <span className="blog-post-card1-text4">{props.author}</span>
            </div>
            <span className="blog-post-card1-text5">{props.time}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card1-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card1-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card1-image1 {
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
            background-position: center;
          }
          .blog-post-card1-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .blog-post-card1-container1 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card1-text1 {
            color: #595959;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card1-text2 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-text3 {
            color: #595959;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #d9d9d9;
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-post-card1-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card1-container3 {
            width: var(--dl-size-size-small);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            background-size: cover;
            justify-content: center;
            background-image: url('/logoblue.svg');
            background-position: center;
          }
          .blog-post-card1-text4 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card1-text5 {
            color: #999999;
            font-weight: 300;
          }

          @media (max-width: 991px) {
            .blog-post-card1-image1 {
              height: 350px;
            }
            .blog-post-card1-container3 {
              background-size: cover;
              background-image: url('/logoblue.svg');
            }
          }
          @media (max-width: 479px) {
            .blog-post-card1-container3 {
              background-size: cover;
              background-image: url('/logoblue.svg');
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard1.defaultProps = {
  label: 'NOUTATI',
  imageAlt: 'image',
  imageSrc1: '/news-1500w.webp',
  description: 'lOREM IPSUM LOREM IPSUM ....',
  time: '',
  rootClassName: '',
  author: 'Publicat:',
  title: 'Adunarea Generala Extraordinara a actionarilor',
}

BlogPostCard1.propTypes = {
  label: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  rootClassName: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard1

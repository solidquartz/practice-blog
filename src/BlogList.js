import React from 'react'
import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {

  //destructured above so no need for this:
  // const blogs = props.blogs;
  // const title = props.title;

  //can destructure only the props we need


  return (
    <div className='blog-list'>
      
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList;
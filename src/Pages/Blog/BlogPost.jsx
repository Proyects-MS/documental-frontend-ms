import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BlogPostContain from '../../Component/Blog/BlogPost';

const BlogPost = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Blog" title="Add Post" />
      <BlogPostContain />
    </Fragment>
  );
};

export default BlogPost;
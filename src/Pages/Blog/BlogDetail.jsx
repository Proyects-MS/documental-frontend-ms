import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BlogDetailContain from '../../Component/Blog/BlogDetail';

const BlogDetail = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Blog" title="Blog Details" />
      <BlogDetailContain />
    </Fragment>
  );
};

export default BlogDetail;
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BlogSingleContain from '../../Component/Blog/BlogSingle';

const BlogSingle = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Blog" title="Blog Single" />
      <BlogSingleContain />
    </Fragment>
  );
};

export default BlogSingle;
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogBox from './BlogDetail/BlogBox';
import Perspiciatis from './BlogDetail/Perspiciatis';
import Gallery from './BlogDetail/Gallery';

const BlogDetailContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="blog-page">
        <Row>
          <BlogBox />
          <Col className="col-xxl-6 set-col-12 box-col-5 xl-60">
            <Row>
              <Perspiciatis />
            </Row>
          </Col>
          <Gallery />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogDetailContain;

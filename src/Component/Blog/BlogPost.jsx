import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { PostEdit, Post, Discard } from '../../Constant';
import { Btn, H5 } from '../../AbstractElements';
import FormPost from './BlogPost/FormPost';
import DropzoneClass from './BlogPost/DropzoneClass';

const BlogPostContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'><H5>{PostEdit}</H5></CardHeader>
              <CardBody className="add-post">
                <FormPost />
                <DropzoneClass />
                <div className="btn-showcase text-end">
                  <Btn attrBtn={{ color: 'primary', type: 'submit' }} >{Post}</Btn>
                  <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Discard}</Btn>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogPostContain;
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LearningFilter from '../Common/learning-filter';
import BlogBox from './BlogBox';
import BoxList from './BoxList';

const LearningListContain = () => {

  return (
    <Fragment>
      <Container fluid={true}>
        <Row className='learning-block'>
          <Col xl="9" className='xl-60'>
            <Row>
              <BlogBox />
              <BoxList />
            </Row>
          </Col>
          <LearningFilter />
        </Row>
      </Container>
    </Fragment>
  );
};

export default LearningListContain;
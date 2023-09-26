import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BothSideScroll from './BothSideScroll';
import HorizontalScroll from './HorizontalScroll';
import VerticalScroll from './VerticalScroll';
import NoScrollbar from './NoScrollbar';

const ScrollableContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className='scrollable-para'>
        <Row>
          <BothSideScroll />
          <HorizontalScroll />
          <NoScrollbar />
          <VerticalScroll />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ScrollableContain;
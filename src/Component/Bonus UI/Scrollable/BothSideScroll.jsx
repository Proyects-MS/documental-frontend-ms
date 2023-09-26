import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import ScrollBar from 'react-perfect-scrollbar';

const BothSideScroll = () => {
  return (
    <Fragment>
      <Col sm="12" md='6'>
        <Card>
          <CardHeader className="pb-0">
            <H5>{'Both Side Scroll'}</H5>
          </CardHeader>
          <CardBody>
            <ScrollBar className="vertical-scroll both-side-scroll">
              <Image attrImage={{ src: `${require('../../../assets/images/banner/1.jpg')}`, alt: '', height: '600' }} />
            </ScrollBar>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BothSideScroll;
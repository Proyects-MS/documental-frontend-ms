import React, { Fragment } from 'react';
import { Col, Media, Row } from 'reactstrap';
import { H4, H6, P } from '../../../AbstractElements';
import { JohanDeo, JohanDeoMailId, ProjectDescription, ProjectDescriptionDetails } from '../../../Constant';
import { Image } from '../../../AbstractElements';
import user1 from '../../../assets/images/user/1.jpg';

const InvoiceDescription = () => {
  return (
    <Fragment>
      <Row className="invo-profile">
        <Col xl="4">
          <Media>
            <div className="media-left"><Image attrImage={{ className: 'media-object rounded-circle img-60', src: `${user1}`, alt: '' }} /></div>
            <Media body className='m-l-20'>
              <H4 attrH4={{ className: 'media-heading' }}>{JohanDeo}</H4>
              <P>{JohanDeoMailId}<br /><span>555-555-5555</span></P>
            </Media>
          </Media>
        </Col>
        <Col xl="8">
          <div className="text-xl-end" id="project">
            <H6>{ProjectDescription}</H6>
            <P>{ProjectDescriptionDetails}</P>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default InvoiceDescription;
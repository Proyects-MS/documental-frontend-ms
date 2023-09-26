import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Media, Row } from 'reactstrap';
import { H3, H4, P, Image } from '../../../AbstractElements';
import { InvoiceHash, IssuedMay, PaymentDue } from '../../../Constant';
import login from '../../../assets/images/logo/logo-icon.png';

const InvoiceHeader = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="6">
          <Media>
            <div className="media-left">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <Image attrImage={{ className: 'media-object img-60', src: `${login}`, alt: '' }}
                />
              </Link>
            </div>
            <Media body className="m-l-20">
              <H4 attrH4={{ className: 'media-heading' }}>Zeta</H4>
              <P> hello@Zeta.in
                <br />
                <span>{'289-335-6503'}</span>
              </P>
            </Media>
          </Media>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <H3>
              {InvoiceHash}
              <span className="counter">1069</span>
            </H3>
            <P>
              {IssuedMay}
              <span> 27, 2022</span>
              <br />
              {PaymentDue}{' '}
              <span> 27, 2022</span>
            </P>
          </div>
        </Col>
      </Row>
      <hr />
    </Fragment >
  );
};
export default InvoiceHeader;
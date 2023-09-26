import React, { Fragment } from 'react';
import { Card, CardBody, CardFooter, Col, Media, Row } from 'reactstrap';
import { H4, H5, H6, Image } from '../../../AbstractElements';
import { Likes, Posts } from '../../../Constant';
import { SocialHandelData } from '../../../Data/Widgets';

const SocialHandle = () => {
  return (
    <Fragment>
      {
        SocialHandelData.map((item) => {
          return (
            <Col sm="6" xl="3" lg="6" className="xl-50 box-col-6" key={item.id}>
              <Card className="social-widget-card">
                <CardBody>
                  <Media>
                    <div className="social-font"><Image attrImage={{ src: `${item.img}`, alt: '' }} /></div>
                    <Media body>
                      <H4>{item.title}</H4>
                    </Media>
                  </Media>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col className="text-center">
                      <H6 attrH6={{ className: 'font-roboto' }}> {Posts}</H6>
                      <H5 attrH5={{ className: 'counter mb-0 font-roboto font-primary mt-2' }}> 6589</H5>
                    </Col>
                    <div className="col text-center">
                      <H6 attrH6={{ className: 'font-roboto' }}> {Likes}</H6>
                      <H5 attrH5={{ className: 'counter mb-0 font-roboto font-primary mt-2' }}> 6589</H5>
                    </div>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          );
        })
      }
    </Fragment >
  );
};
export default SocialHandle;
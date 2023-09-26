import React, { Fragment } from 'react';
import { Col, CardBody, Row, Card } from 'reactstrap';
import { Btn, H2, H3, H6, LI, P, UL } from '../../../AbstractElements';
import { Subscribe } from '../../../Constant';
import { StandardData } from '../../../Data/Ecommerce';

const Standards = () => {
  return (
    <Fragment>
      <CardBody className="pricing-content pricing-col">
        <Row>
          {StandardData.map((item) => {
            return (
              <Col sm="6" xl="3" className="xl-50 box-col-6" key={item.id}>
                <Card className="pricing-block text-center">
                  <div className="pricing-header">
                    <H2>{item.title}</H2>
                    <div className="price-box">
                      <div>
                        <H3>{item.prize}</H3>
                        <P>{item.month}</P>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-list">
                    <UL attrUL={{ className: 'simple-list pricing-inner' }}>
                      <LI>
                        <H6>{item.storage1}
                          <span>{item.props1}</span></H6>
                      </LI>
                      <LI>
                        <H6>{item.storage2}
                          <span>{item.props2}</span></H6>
                      </LI>
                      <LI>
                        <H6>{item.storage3}
                          <span>{item.props3}</span></H6>
                      </LI>
                      <LI>
                        <H6>{item.storage4}
                          <span>{item.props4}</span></H6>
                      </LI>
                      <LI>
                        <H6>{item.storage5}
                          <span>{item.props5}</span></H6>
                      </LI>
                    </UL>
                    <Btn attrBtn={{ color: 'primary', size: 'lg' }}>
                      {Subscribe}
                    </Btn>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default Standards;

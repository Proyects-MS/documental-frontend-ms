import { Btn, H1, H3, H6 } from '../../../AbstractElements';
import { LorumIpsum, Purchase } from '../../../Constant';
import { SmallCard } from '../../../Data/Ecommerce';
import { Col, Card, CardBody, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const StandardPricingcard = () => {
  return (
    <Fragment>
      <CardBody className="pricing-block">
        <Row>
          {
            SmallCard.map((item) => {
              return (
                <Col xl="3" sm="6" className="box-col-6 xl-50" key={item.id}>
                  <Card className="text-center pricing-simple">
                    <CardBody>
                      <H3>{item.title}</H3>
                      <H1>{item.prize}</H1>
                      <H6 attrH6={{ className: 'mb-0' }}>{LorumIpsum}</H6>
                    </CardBody>
                    <Btn attrBtn={{ color: 'primary' }}>{Purchase}</Btn>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default StandardPricingcard;

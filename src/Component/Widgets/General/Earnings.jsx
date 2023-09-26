import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { H4, H6 } from '../../../AbstractElements';
import { EarningsData } from '../../../Data/Widgets';

const Earnings = () => {
  return (
    <Fragment>
      {
        EarningsData.map((item) => {
          return (
            <Col sm="6" xl="3" lg="6" key={item.id}>
              <Card className="o-hidden">
                <CardBody>
                  <Media className="static-widget">
                    <Media body><H6 attrH6={{ className: 'font-roboto' }}>{item.product}</H6>
                      <H4 attrH4={{ className: 'mb-0 counter' }}><CountUp end={item.count} /></H4>
                    </Media>
                    {item.icon}
                  </Media>
                  <div className="progress-widget">
                    <div className="progress sm-progress-bar progress-animate">
                      <div className={item.class} role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="animate-circle"></span></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })
      }
    </Fragment>
  );
};
export default Earnings;

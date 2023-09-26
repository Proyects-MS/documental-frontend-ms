import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { WhetherIconsWithAnimations } from '../../../Constant';
import { weatherIconData } from '../../../Data/Icons/index';

const WeatherIconsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'>
                <H5 attrH5={{ className: 'm-b-0' }}>{WhetherIconsWithAnimations}</H5>
              </CardHeader>
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {weatherIconData.map((icon, i) => (
                    <Col lg="2 col-4" key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default WeatherIconsContain;

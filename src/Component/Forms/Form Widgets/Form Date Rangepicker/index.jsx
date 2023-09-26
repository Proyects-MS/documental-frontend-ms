import { H5 } from '../../../../AbstractElements';
import DateRangedata from './DateRangedata';
import SingleDate from './SingleDate';
import TimeAndDate from './TimeAndDate';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Fragment } from 'react';
import React from 'react';

const FormDateRangepickerContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col>
              <Card>
                <CardHeader className="pb-0">
                  <H5>Date Range Picker</H5>
                </CardHeader>
                <CardBody>
                  <Row className="date-range-picker">
                    <DateRangedata />
                    <SingleDate />
                    <TimeAndDate />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default FormDateRangepickerContain;
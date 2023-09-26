import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import DateTimeForm from './DateTimeForm';

const DateTimeContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Card>
          <CardHeader className="pb-0">
            <H5>Date Time Picker</H5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="12">
                <div className="datetime-picker">
                  <DateTimeForm />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default DateTimeContain;
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';
import { DatePickers } from '../../../../Constant/index';
import DatePickersData from './DatePicker';

const FormDatapickerContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Card>
          <CardHeader className="pb-0">
            <H5>{DatePickers}</H5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="12">
                <div className="date-picker">
                  <DatePickersData />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default FormDatapickerContain;
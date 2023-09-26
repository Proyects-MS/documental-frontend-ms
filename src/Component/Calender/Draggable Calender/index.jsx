import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { Dragging_Event } from '../../../Constant';
import DragCalendar from './DragCalendar';

const DraggableContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{Dragging_Event}</H5>
              </CardHeader>
              <CardBody>
                <div className="basic-calendar">
                  <Row>
                    <DragCalendar />
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DraggableContain;
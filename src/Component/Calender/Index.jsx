import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import { BasicCalendars } from '../../Constant';
import { H5 } from '../../AbstractElements';
import myEventsList from './events';

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k]);

const CalenderContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{BasicCalendars}</H5>
              </CardHeader>
              <CardBody>
                <Calendar
                  localizer={localizer}
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date(2022, 3, 12)}
                  onSelectEvent={event => alert(event.title)}
                  views={allViews}
                  events={myEventsList}
                  eventOverlap
                  dragRevertDuration={500}
                  dragScroll
                  droppable={true}
                  showMultiDayTimes
                  step={60}
                  startAccessor="start"
                  endAccessor="end"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CalenderContain;
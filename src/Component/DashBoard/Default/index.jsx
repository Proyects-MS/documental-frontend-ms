import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import DailyEarning from './DailyEarning';
import Greeting from './Greeting';
import NewsUpdates from './NewsUpdate';
import OutgoingProject from './OutgoingProject';
import RecentActivitys from './RecentActivitys';
import TotalTrasactions from './TotalTrasactions';
import Yearly from './Yearly';

const DefaultContain = () => {
  const val = true;
  return (
    <Fragment>
      <Container fluid={true} className="default-dash">
        <Row>
          <Greeting />
          <DailyEarning />
          <OutgoingProject val={val} />
        </Row>
      </Container>
    </Fragment>
  );
};
export default DefaultContain;
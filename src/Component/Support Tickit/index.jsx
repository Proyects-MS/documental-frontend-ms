import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H5 } from '../../AbstractElements';
import TicketList from './TicketList';
import TicketTable from './TicketTable';

const SupportTickitContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{'Support Ticket List'}</H5>
                <span>{'List of ticket opend by customers'}</span>
              </CardHeader>
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SupportTickitContain;

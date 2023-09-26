import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Contain from './Contain';
import Sidebar from './Sidebar';

const RolesContain = ({toggle, data, toggleEdit, setroleSelectedId, changing}) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="xl-30 box-col-3">
              <Sidebar toggle={toggle} data={data} toggleEdit={toggleEdit} setroleSelectedId={setroleSelectedId} changing={changing}/>
            </Col>
            <Col xl="9" md="12" className="xl-70 box-col-9">
              <Contain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default RolesContain;
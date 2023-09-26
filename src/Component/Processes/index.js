import DataList from './Data/DataList';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const ProcessesContain = ({ data, toggle, changing}) => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row className=" project-cards">
            <DataList data={data} toggle={toggle} changing={changing}/>
          </Row>
        </Container>
      </Fragment>
    );
};
export default ProcessesContain;
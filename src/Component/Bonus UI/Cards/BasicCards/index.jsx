import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicCommon from './BasicCommon';

const BasicCardContain = () => {
    return (
      <Fragment>
        <Container fluid={true} className="basic-cards">
          <Row>
            <BasicCommon />
          </Row>
        </Container>
      </Fragment>
    );
};

export default BasicCardContain;
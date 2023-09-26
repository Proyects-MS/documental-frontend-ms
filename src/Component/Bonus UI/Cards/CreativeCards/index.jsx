import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import CreativeCardsCommon from './themeCards';

const CreativeCardContain = () => {
    return (
      <Fragment>
        <Container fluid={true} className="basic-cards">
          <Row>
            <CreativeCardsCommon />
          </Row>
        </Container>
      </Fragment>
    );
};

export default CreativeCardContain;
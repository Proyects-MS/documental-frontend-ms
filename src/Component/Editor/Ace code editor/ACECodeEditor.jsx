import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import CssMode from './CSSMode';
import HtmlMode from './HTMLMode';
import JavascriptMode from './JavascriptMode';
import JavaMode from './Java';

const ACEEditorContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <JavaMode />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ACEEditorContain;
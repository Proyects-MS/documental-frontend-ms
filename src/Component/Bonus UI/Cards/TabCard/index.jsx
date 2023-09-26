import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import ColorOptionClass from './ColorOption';
import ColorTabClass from './ColorTab';
import MaterialTabWithColorClass from './MaterialTabWithColor';
import TabCardCommon from './tabCard';
import TabCardCommonClass from './TabsWithIcon';

const TabCardContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <TabCardCommon />
          <TabCardCommonClass />
          <ColorTabClass />
          <ColorOptionClass />
          <MaterialTabWithColorClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TabCardContain;
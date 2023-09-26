import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import SizingCard from '../../../_core/Ui-kits/Avtar/SizingCard';
import StatusIndicatorCard from '../../../_core/Ui-kits/Avtar/StatusIndicatorCard';
import ShapeCard from '../../../_core/Ui-kits/Avtar/ShapeCard';
import GroupCard from '../../../_core/Ui-kits/Avtar/GroupCard';

const Avatars = (props) => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Avatars" />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <SizingCard />
            <StatusIndicatorCard />
            <ShapeCard />
            <GroupCard />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Avatars;
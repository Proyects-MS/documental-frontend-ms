import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import BasicModals from '../../../_core/Ui-kits/Modals/Basic';
import SizesModals from '../../../_core/Ui-kits/Modals/Sizes';
import StaticModal from '../../../_core/Ui-kits/Modals/Staic';
import VaryingContent from '../../../_core/Ui-kits/Modals/VaryingContent';


const Modals = (props) => {

  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Modal" />
      <Container fluid={true}>
        <Row>
          <StaticModal />
          <BasicModals />
          <VaryingContent />
          <SizesModals />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Modals;
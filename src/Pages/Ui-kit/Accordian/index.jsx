import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import BasicAccordions from '../../../_core/Ui-kits/Accordian/Basic';
import AllClose from '../../../_core/Ui-kits/Accordian/AllClose';
import PrimaryColorAccordian from '../../../_core/Ui-kits/Accordian/PrimaryColor';
import SecondaryColorAccordian from '../../../_core/Ui-kits/Accordian/SecondaryColor';
import WithIcon from '../../../_core/Ui-kits/Accordian/WithIcon';
import WithOperand from '../../../_core/Ui-kits/Accordian/WithOperand';

const Accordian = (props) => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Accordion" />
      <Container fluid={true} className="accordian-page">
        <Row>
          <BasicAccordions />
          <AllClose />
          <PrimaryColorAccordian />
          <SecondaryColorAccordian />
          <WithIcon />
          <WithOperand />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Accordian;
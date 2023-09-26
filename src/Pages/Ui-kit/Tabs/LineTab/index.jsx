import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import BottomTab from '../../../../_core/Ui-kits/Tabs/LineTabs/BottomTab';
import InfoColorTab from '../../../../_core/Ui-kits/Tabs/LineTabs/Colored/InfoTab';
import PrimaryColorTab from '../../../../_core/Ui-kits/Tabs/LineTabs/Colored/PrimaryTab';
import SecondaryColorTab from '../../../../_core/Ui-kits/Tabs/LineTabs/Colored/SecondaryTab';
import SuccessColorTab from '../../../../_core/Ui-kits/Tabs/LineTabs/Colored/SuccessTab';
import LeftTab from '../../../../_core/Ui-kits/Tabs/LineTabs/LeftTab';
import RightTab from '../../../../_core/Ui-kits/Tabs/LineTabs/RightTab';
import Simple from '../../../../_core/Ui-kits/Tabs/LineTabs/Simple';

const TabLine = (props) => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Line Tabs" />
      <Container fluid={true}>
        <Row>
          <Simple />
          <BottomTab />
          <LeftTab />
          <RightTab />
          <PrimaryColorTab />
          <SecondaryColorTab />
          <SuccessColorTab />
          <InfoColorTab />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TabLine;
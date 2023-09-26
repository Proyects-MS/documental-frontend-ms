import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import BasicTabCard from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/BasicTabCard';
import BottomLeftAlignCard from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/TabAligns/BottomLeftAlignCard';
import RighhtAlign from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/TabAligns/RightAlign';
import WithIcon from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/WithIcon';
import Vertical from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/TabAligns/Vertical';
import PillTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTab';
import PillTabWithIcon from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabWithIcon';
import PillDarkTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Dark';
import PillPrimaryTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Primary';
import PillSecondaryTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Secondary';
import PillSucessTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Success';
import PillInfoTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Info';
import PillWarningTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Warning';
import PillDangerTab from '../../../../_core/Ui-kits/Tabs/BoostrapTabs/PillTabs/PillTabColor/Danger';

const TabBootstrap = (props) => {

  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Bootstrap Tabs" />
      <Container fluid={true}>
        <Row>
          <BasicTabCard />
          <BottomLeftAlignCard />
          <WithIcon />
          <RighhtAlign />
          <Vertical />
          <PillTab />
          <PillTabWithIcon />
          <PillDarkTab />
          <PillPrimaryTab />
          <PillSecondaryTab />
          <PillSucessTab />
          <PillInfoTab />
          <PillWarningTab />
          <PillDangerTab />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TabBootstrap;
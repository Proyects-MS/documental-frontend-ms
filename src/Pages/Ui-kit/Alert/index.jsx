import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import AlertWithDarkDismiss from '../../../_core/Ui-kits/Alert/DarkDismiss';
import LightAlert from '../../../_core/Ui-kits/Alert/LightAlert';
import AlertWithLightDismiss from '../../../_core/Ui-kits/Alert/LightDismiss';
import LightLinkColor from '../../../_core/Ui-kits/Alert/LightLinkColor';
import LinkColors from '../../../_core/Ui-kits/Alert/LinkColor';
import OutlineAlert from '../../../_core/Ui-kits/Alert/OutlineAlert';
import ThemeColorAlert from '../../../_core/Ui-kits/Alert/ThemeColor';
import AlertWithIcons from '../../../_core/Ui-kits/Alert/WithIcon';
import DarkOutlineAlert from '../../../_core/Ui-kits/Alert/DarkOutline';
import IconsWithOutline from '../../../_core/Ui-kits/Alert/OutlineWithIcon';
import IconInverse from '../../../_core/Ui-kits/Alert/IconInverse';
import TextAsActions from '../../../_core/Ui-kits/Alert/TextAsAction';
import AdditionalContents from '../../../_core/Ui-kits/Alert/AdditonalContent';

const Alerts = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Alert" />
      <Container fluid={true}>
        <Row>
          <ThemeColorAlert />
          <LinkColors />
          <AlertWithDarkDismiss />
          <AlertWithIcons />
          <LightAlert />
          <LightLinkColor />
          <AlertWithLightDismiss />
          <OutlineAlert />
          <DarkOutlineAlert />
          <IconsWithOutline />
          <IconInverse />
          <TextAsActions />
          <AdditionalContents />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Alerts;
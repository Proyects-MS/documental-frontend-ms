import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from '../../../_core/Ui-kits/Dropdown/Basic';
import BasicColor from '../../../_core/Ui-kits/Dropdown/BasicColor';
import Rounded from '../../../_core/Ui-kits/Dropdown/Rounded';
import SplitButton from '../../../_core/Ui-kits/Dropdown/SplitButton';
import WithDivider from '../../../_core/Ui-kits/Dropdown/WithDivider';
import WithHeader from '../../../_core/Ui-kits/Dropdown/WithHeader';
import WithDropUp from '../../../_core/Ui-kits/Dropdown/WithDropUp';
import WithDisable from '../../../_core/Ui-kits/Dropdown/WithDisable';

const Dropdowns = (props) => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Dropdown" />
      <Container fluid={true}>
        <Row>
          <Basic />
          <BasicColor />
          <SplitButton />
          <Rounded />
          <WithDivider />
          <WithHeader />
          <WithDropUp />
          <WithDisable />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dropdowns;
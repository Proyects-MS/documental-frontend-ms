import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import HeadingCard from '../../../_core/Ui-kits/Typography/HeadingCard/index';
import FontWeightCards from '../../../_core/Ui-kits/Typography/FontWeightCards';
import FadedHeadingCard from '../../../_core/Ui-kits/Typography/FadedHeadingCard';
import DisplayHeadingCard from '../../../_core/Ui-kits/Typography/DisplayHeadingCard';
import LeadCard from '../../../_core/Ui-kits/Typography/LeadCard';
import InlineTextCard from '../../../_core/Ui-kits/Typography/InlineTextCard';
import TextColorCard from '../../../_core/Ui-kits/Typography/TextColorCard';
import ListCard from '../../../_core/Ui-kits/Typography/ListCard';
import BlockQuoteCard from '../../../_core/Ui-kits/Typography/BlockQuoteCard';
import { Breadcrumbs } from '../../../AbstractElements';

const Typography = () => {

  return (
    <Fragment>
        <Breadcrumbs parent="Ui Kits" title="Typography" />
      <Container fluid={true}>
        <Row>
          <HeadingCard />
          <FontWeightCards />
          <FadedHeadingCard />
          <DisplayHeadingCard />
          <LeadCard />
          <InlineTextCard />
          <TextColorCard />
          <ListCard />
          <BlockQuoteCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Typography;
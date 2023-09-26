import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MarginCard from '../../../_core/Ui-kits/HelperClass/AllMarginCards/Margin';
import PaddingCard from '../../../_core/Ui-kits/HelperClass/AllPaddingCards/PaddingsCard';
import PaddingLeftCard from '../../../_core/Ui-kits/HelperClass/AllPaddingCards/PaddingLeft';
import PaddingRightCard from '../../../_core/Ui-kits/HelperClass/AllPaddingCards/PaddingRight';
import PaddingTopCard from '../../../_core/Ui-kits/HelperClass/AllPaddingCards/PaddingTop';
import PaddingBottomCard from '../../../_core/Ui-kits/HelperClass/AllPaddingCards/PaddingBottom';
import MarginLeftCard from '../../../_core/Ui-kits/HelperClass/AllMarginCards/MarginLeft';
import MarginRightCard from '../../../_core/Ui-kits/HelperClass/AllMarginCards/MarginRight';
import MarginTopCard from '../../../_core/Ui-kits/HelperClass/AllMarginCards/MarginTop';
import MarginBottomCard from '../../../_core/Ui-kits/HelperClass/AllMarginCards/MarginBottom';
import ButtonColorCard from '../../../_core/Ui-kits/HelperClass/AllButtonsCards/ButtonColor';
import ButtonOutlineCard from '../../../_core/Ui-kits/HelperClass/AllButtonsCards/ButtonOutline';
import AllBorersColorCard from '../../../_core/Ui-kits/HelperClass/AllBordersCards/AllBordersColor';
import BorderRadiusCard from '../../../_core/Ui-kits/HelperClass/AllBordersCards/BorderRadius';
import BorderWidthCard from '../../../_core/Ui-kits/HelperClass/AllBordersCards/BorderWidth';
import FontSizeCard from '../../../_core/Ui-kits/HelperClass/AllFontsCards/FontSize';
import FontWeightCard from '../../../_core/Ui-kits/HelperClass/AllFontsCards/FontWeight';
import FontStyleCard from '../../../_core/Ui-kits/HelperClass/AllFontsCards/FontStyle';
import BackgroundColorCard from '../../../_core/Ui-kits/HelperClass/BackgroundColor';
import ImageSizesCard from '../../../_core/Ui-kits/HelperClass/ImageSizes';
import FloatCard from '../../../_core/Ui-kits/HelperClass/Float';
import OverFlowCard from '../../../_core/Ui-kits/HelperClass/Overflow';
import PositionCard from '../../../_core/Ui-kits/HelperClass/Position';
import TextColorCard from '../../../_core/Ui-kits/HelperClass/TextColor';
import VerticalAlignCard from '../../../_core/Ui-kits/HelperClass/VerticalAlign';
import BadgeColorCard from '../../../_core/Ui-kits/HelperClass/BadgeColor';
import { Breadcrumbs } from '../../../AbstractElements';

const HelperClasses = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Helper Classes" />
      <Container fluid={true}>
        <Row>
          <PaddingCard />
          <MarginCard />
          <PaddingLeftCard />
          <PaddingRightCard />
          <PaddingTopCard />
          <PaddingBottomCard />
          <MarginLeftCard />
          <MarginRightCard />
          <MarginTopCard />
          <MarginBottomCard />
          <VerticalAlignCard />
          <ImageSizesCard />
          <TextColorCard />
          <BadgeColorCard />
          <BackgroundColorCard />
          <ButtonColorCard />
          <Col xl="6">
            <BorderRadiusCard />
            <FontWeightCard />
            <FontStyleCard />
            <FloatCard />
            <OverFlowCard />
          </Col>
          <FontSizeCard />
          <AllBorersColorCard />
          <Col xl="6">
            <BorderWidthCard />
            <PositionCard />
            <ButtonOutlineCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HelperClasses;
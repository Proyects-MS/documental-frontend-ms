import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import ContextualBadge from '../../../_core/Ui-kits/TagAndPills/Tags/Contextual';
import ContextualPills from '../../../_core/Ui-kits/TagAndPills/Pills/Contextual';
import TagWithNum from '../../../_core/Ui-kits/TagAndPills/Tags/WithNum';
import PillWithNum from '../../../_core/Ui-kits/TagAndPills/Pills/WithNum';
import TagWithIcon from '../../../_core/Ui-kits/TagAndPills/Tags/WithIcon';
import PillWithIcon from '../../../_core/Ui-kits/TagAndPills/Pills/WithIcon';
import { Breadcrumbs } from '../../../AbstractElements';
import BadgeExample from '../../../_core/Ui-kits/TagAndPills/BadgeExample';
import ButtonPart from '../../../_core/Ui-kits/TagAndPills/ButtonPart';

const TagAndPills = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Tag & Pills" />
      <Container fluid={true} className="tagandpills">
        <Row>
          <ContextualBadge />
          <ContextualPills />
          <TagWithNum />
          <PillWithNum />
          <TagWithIcon />
          <PillWithIcon />
          <BadgeExample />
          <ButtonPart />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TagAndPills;
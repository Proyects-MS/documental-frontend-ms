import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Articals from '../Knowledgebase/Knowledgebase/Articals';
import ArticeVideo from './ArticeVideo';
import FAQFeaturesTutorial from './FeaturesTutorial';
import Questionss from './Questions';

const FAQContent = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="faq-wrap">
          <Row>
            <Articals />
            <Questionss />
            <FAQFeaturesTutorial />
            <ArticeVideo />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default FAQContent;
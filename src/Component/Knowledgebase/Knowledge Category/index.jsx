import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Articals from '../Knowledgebase/Articals';
import HeaderPart from '../Knowledgebase/HeaderPart';
import CategoryData from './CategoryData';

const KnowledgeCategoryContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className='faq-section'>
        <Row>
          <HeaderPart />
          <Articals />
          <CategoryData />
        </Row>
      </Container>
    </Fragment>
  );
};
export default KnowledgeCategoryContain;
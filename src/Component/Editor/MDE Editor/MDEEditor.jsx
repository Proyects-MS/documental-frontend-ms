import { MDEEditorExample } from '../../../Constant';
import { H5 } from '../../../AbstractElements';
import SmallEditor from './SmallEditor';
import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import SimpleMDE from 'react-simplemde-editor';

const MdeEDitorContain = () => {
  const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
  const handleChange = () => {
    setText('Enter text in the area on the left. For more info, click the ? (help) icon in the menu.');
  };
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>{MDEEditorExample}</H5>
              </CardHeader>
              <CardBody>
                <SimpleMDE
                  id="editor_container"
                  onChange={handleChange}
                  value={text}
                  options={{
                    autofocus: true,
                    spellChecker: false
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <SmallEditor />
      </Container>
    </Fragment>
  );
};
export default MdeEDitorContain;
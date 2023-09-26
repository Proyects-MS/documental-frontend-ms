import React, { Fragment } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import FileContent from './FileContent';
import FileSideBar from './FileSidebar';

const FileManagerContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <FileSideBar />
          <Col xl="9" md="12" className="xl-70">
            <div className="file-content">
              <Card>
                <FileContent />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FileManagerContain;
import React, { Fragment } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import FileContent from './FileContent';
import FileSideBar from './FileSidebar';

const RepositoryContain = ({data}) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col xl="12" md="12" className="xl-100">
            <div className="file-content">
              <Card>
                <FileContent data={data}/>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default RepositoryContain;
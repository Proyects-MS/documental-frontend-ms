import ProjectDataList from './Project Data/ProjectDataList';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

const ProjectListContain = (props) => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row className=" project-cards">
            <ProjectDataList />
          </Row>
        </Container>
      </Fragment>
    );
};
export default ProjectListContain;
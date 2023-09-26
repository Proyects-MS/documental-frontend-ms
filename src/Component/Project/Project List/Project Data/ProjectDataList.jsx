import React, { Fragment, useState } from 'react';
import { CheckCircle, Info, PlusCircle, Target } from 'react-feather';
import { Card, CardBody, Col, Nav, NavLink, NavItem, Row, TabContent, TabPane, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import AllProjectData from './AllProjectData';
import DoingProjectData from './DoingProjectData';
import DoneProjectData from './DoneProjectData';

const ProjectDataList = () => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Fragment>
      <Col md="12" className="project-list">
        <Card>
          <Row>
            <Col md="6">
              <Nav tabs className="border-tab">
                <NavItem>
                  <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}><Target />All</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}><Info />Doing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}><CheckCircle />Done</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="6">
              <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/project/createlist`}> <PlusCircle />Create New Project</Link>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col sm="12">
        <Card>
          <CardBody>
            <TabContent activeTab={activeTab} id="top-tabContent">
              <TabPane tabId="1">
                <AllProjectData />
              </TabPane>
              <TabPane tabId="2">
                <DoingProjectData />
              </TabPane>
              <TabPane tabId="3">
                <DoneProjectData />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProjectDataList;
import React, { Fragment, useState } from 'react';
import { Card, Col, Nav, Row, NavItem, NavLink, FormGroup } from 'reactstrap';
import { CheckCircle, Info, PlusCircle, Target } from 'react-feather';
import { Link } from 'react-router-dom';

const ProjectNavTab = (props) => {
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
    </Fragment>
  );
};
export default ProjectNavTab;
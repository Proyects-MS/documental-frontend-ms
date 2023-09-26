import React, { Fragment, useCallback, useState } from 'react';
import { Col, Card, CardBody, Nav, NavItem } from 'reactstrap';
import { PlusCircle } from 'react-feather';
import { Views, Tags } from '../../Constant';
import { taskData, tagData } from '../../Data/Task/index';
import NewTaskClass from './NewTask';
import HeaderProfile from './HeaderProfile';
import CreateTag from './CreateTag';
import { LI } from '../../AbstractElements';

const NavClass = ({ activeToggle }) => {
  const [activeTab, setActiveTab] = useState('1');
  const [tagModal, setTagModal] = useState(false);
  const tagToggle = () => setTagModal(!tagModal);
  const tagCallback = useCallback((modal) => {
    setTagModal(modal);
  }, []);
  const [IsOpen, setIsOpen] = useState(false);
  const onClickSidebar = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Fragment>
      <Col xl="3" className="box-col-3 xl-30">
        <div className="md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={onClickSidebar}>Task Filter</a>
          <div className={`md-sidebar-aside ${IsOpen ? 'open' : ''}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <HeaderProfile />
                  <Nav className="main-menu" role="tablist">
                    <NavItem>
                      <NewTaskClass />
                    </NavItem>
                    <NavItem>
                      <span className="main-title">{Views}</span>
                    </NavItem>
                    {taskData.map((item) =>
                      <NavItem key={item.id}>
                        <a href="#javaScript" className={activeTab === item.activeTab ? 'active' : ''} onClick={() => {
                          setActiveTab(item.activeTab); activeToggle(item.activeTab);
                        }}>
                          <span className="title"> {item.title}</span>
                        </a>
                      </NavItem>
                    )}
                    <NavItem>
                      <hr />
                    </NavItem>
                    <NavItem><span className="main-title"> {Tags}<span className="pull-right" onClick={tagToggle}><PlusCircle /></span></span></NavItem>
                    <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
                    {tagData.map((item) =>
                      <Fragment key={item.id}>
                        <NavItem><a href="#javaScript" className={activeTab === item.activeTab ? 'show' : ''} onClick={() => {
                          setActiveTab(item.activeTab); activeToggle(item.activeTab);
                        }} ><span className="title"> {item.title}</span></a></NavItem>
                      </Fragment>
                    )}
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default NavClass;
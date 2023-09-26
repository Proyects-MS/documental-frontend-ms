import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import ContactAppContext from '../../../_helper/Contact/index';
import HeaderProfile from './HeaderProfile';
import NavComponent from './NavComponent';
import TabComponent from './TabComponent';

const LeftContact = () => {
  const { users } = useContext(ContactAppContext);
  const [activeTab, setActiveTab] = useState('1');
  useEffect(() => {
  }, [users]);// eslint-disable-next-line
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const callback = useCallback((tab) => {
    setActiveTab(tab);
  }, []);
  const [IsOpen, setIsOpen] = useState(false);
  const onClickSidebar = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Fragment>
      <Col xl="3" className="box-col-3 xl-30">
        <div className="md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={onClickSidebar}>Contact Filter</a>
          <div className={`md-sidebar-aside ${IsOpen ? 'open' : ''}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <HeaderProfile />
                  <NavComponent callbackActive={callback} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
      <Col xl="9" md="12" className="xl-70 box-col-9">
        <div className="email-right-aside bookmark-tabcontent contacts-tabs">
          <div className="email-body radius-left">
            <div className="ps-0">
              <TabComponent activeTab={activeTab} users={users} selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default LeftContact;
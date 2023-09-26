import React, { Fragment, useContext, useState } from 'react';
import { Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ChatAppContext from '../../../_helper/chat-app/index';
import { CALL, STATUS, PROFILE } from '../../../Constant/index';
import { Image, LI, UL } from '../../../AbstractElements';
import MenuTab3 from './MenuTab3';
import MenuTab2 from './MenuTab2';

const ChatMenu = () => {
  const { allMemberss, sidebarToggle } = useContext(ChatAppContext);
  const [activeTab, setActiveTab] = useState('1');
  const style = { opacity: 1, visibility: 'visible' };
  return (
    <Fragment>
      {sidebarToggle && <Col className="chat-menu show" style={style}>
        <Nav tabs className="border-tab nav-primary">
          <NavItem id="myTab" role="tablist">
            <NavLink tag="a" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}> {CALL}</NavLink>
          </NavItem>
          <NavItem id="myTab" role="tablist">
            <NavLink tag="a" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
              {STATUS}
            </NavLink>
          </NavItem>
          <NavItem id="myTab" role="tablist">
            <NavLink tag="a" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>{PROFILE}</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="people-list">
              <UL attrUL={{ as: 'ul', className: 'simple-list list digits custom-scrollbar' }}>
                {allMemberss.map((member, i) => {
                  return (
                    <LI attrLI={{ className: 'clearfix' }} key={i}>
                      <Image attrImage={{
                        className: 'rounded-circle user-image'
                        , src: `${require(`../../../assets/images/${member.thumb}`)}`, alt: ''
                      }} />
                      <div className="about"><div className="name">{member.name}</div>
                        <div className="status"> <i className={member.reply}></i>{member.time}</div>
                      </div>
                    </LI>
                  );
                }
                )}
              </UL>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <MenuTab2 />
          </TabPane>
          <TabPane tabId="3">
            <MenuTab3 />
          </TabPane>
        </TabContent>
      </Col>}
    </Fragment>
  );
};
export default ChatMenu;
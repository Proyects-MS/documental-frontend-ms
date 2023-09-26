import React, { Fragment, useState } from 'react';
import { Col, Media, Nav, NavItem, NavLink } from 'reactstrap';
import { orgList } from '../../../../Data/ContactApp/OrgList';
import { Image, H6, P } from '../../../../AbstractElements';

const NavOrg = ({ callback }) => {
  const [orgactiveTab, setorgActiveTab] = useState('1');
  return (
    <Fragment>
      <Col xl="4" md="5" className=' xl-50'>
        <Nav className="flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
          {orgList.map((item, i) =>
            <NavItem id="myTab" role="tablist" key={i}>
              <NavLink href="#javascript" className={orgactiveTab === item.activeTab ? 'active' : ''} onClick={() => {
                setorgActiveTab(item.activeTab); callback(item.activeTab);
              }}>
                <Media>
                  <Image attrImage={{ className: 'p-0 img-50 img-fluid m-r-20 rounded-circle', src: `${require(`../../../../assets/images/${item.img}`)}`, alt: '' }} />
                  <Media body>
                    <H6>{item.name}</H6>
                    <P>{item.email}</P>
                  </Media>
                </Media>
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Col>
    </Fragment>
  );
};

export default NavOrg;
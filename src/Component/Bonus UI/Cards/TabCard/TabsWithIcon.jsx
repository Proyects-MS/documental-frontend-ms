import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Hometxt, Profile, Contact, TabsWithIcon } from '../../../../Constant';
import { H5, P } from '../../../../AbstractElements';
import { TabCardData } from '../../../../Data/Bonus-ui';

const TabCardCommonClass = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <Fragment>
            {TabCardData.map((item, i) =>
                <Col lg="12 box-col-12" xl="6 xl-100" key={i}>
                    <Card>
                        <CardHeader>
                            <H5>{TabsWithIcon}</H5>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <div className="tabbed-card">
                                <Nav className={item.navClass}>
                                    <NavItem>
                                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}><i className='icofont icofont-ui-home'></i>{Hometxt}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}><i className='icofont icofont-man-in-glasses'></i>{Profile}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}><i className='icofont icofont-contacts'></i>{Contact}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <P attrPara={{ className: 'mb-0' }} >{item.pare1}</P>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <P attrPara={{ className: 'mb-0' }}>{item.pare2}</P>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <P attrPara={{ className: 'mb-0' }}>{item.pare3}</P>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    );
};

export default TabCardCommonClass;
import React, { Fragment, useState } from 'react';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import NavAuth from '../../../Auth/Nav';
import AuthTab from '../../../Auth/Tabs/AuthTab';
import LoginTab from '../../../Auth/Tabs/LoginTab';

const LoginSample = () => {
    const [selected, setSelected] = useState('firebase');

    const callbackNav = ((select) => {
        setSelected(select);
    });

    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <Row>
                    <Col xs="12">
                        <div className="login-card">
                            <div>
                                <div className="login-main1 login-tab1">
                                <NavAuth callbackNav={callbackNav} selected={selected} />
                                <TabContent activeTab={selected} className="content-login">
                                    <TabPane className="fade show" tabId={selected === 'firebase' ? 'firebase' : 'jwt'}>
                                        <LoginTab selected={selected} />
                                    </TabPane>
                                    <TabPane className="fade show" tabId="auth0">
                                        <AuthTab />
                                    </TabPane>
                                </TabContent >
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default LoginSample;
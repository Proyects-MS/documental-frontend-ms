import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, H6, P } from '../../../AbstractElements';
import { Done, EnterOTP, NewPassword, RememberPassword, Resend, RetypePassword, Send, SignIn } from '../../../Constant';

const ForgetPwd = () => {
    return (
        <Fragment>
            <section>
                <Container className='p-0' fluid={true}>
                    <Row className="m-0">
                        <Col className="p-0">
                            <div className="login-main">
                                <div className='login-card1'>
                                    <Form className="theme-form login-form">
                                        <H4 attrH4={{ className: 'mb-3' }}>Reset Your Password</H4>
                                        <FormGroup className="form-group">
                                            <Label>Enter Your Mobile Number</Label>
                                            <Row>
                                                <Col xs="4" sm="3">
                                                    <Input className="form-control" type="text" value="+ 91" />
                                                </Col>
                                                <Col xs="8" sm="9">
                                                    <Input className="form-control" type="tel" value="000-000-0000" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Btn attrBtn={{ class: 'btn-block', color: 'primary', type: 'submit' }} >{Send}</Btn>
                                        </FormGroup>
                                        <FormGroup> <span className="reset-password-link">If don't receive OTP?  <a className="btn-link text-danger" href="#javascript">{Resend}</a></span></FormGroup>
                                        <FormGroup className="form-group">
                                            <Label>{EnterOTP}</Label>
                                            <Row>
                                                <Col>
                                                    <Input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                                                </Col>
                                                <Col>
                                                    <Input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                                                </Col>
                                                <Col>
                                                    <Input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <H6>Create Your Password</H6>
                                        <FormGroup>
                                            <Label>{NewPassword}</Label>
                                            <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                                                <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                                <div className="show-hide"><span className="show"></span></div>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>{RetypePassword}</Label>
                                            <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                                                <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="checkbox">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Btn attrBtn={{ color: 'primary', class: 'btn btn-block', type: 'submit' }} >{Done}</Btn>
                                        </FormGroup>
                                        <P>Already have an password?
                                            <Link to={`${process.env.PUBLIC_URL}/login`}>
                                                <a className="ms-2" href="#javascritp">{SignIn}</a>
                                            </Link>
                                        </P>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
};

export default ForgetPwd;
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P } from '../../../AbstractElements';
import { CreateAccount, Done, NewPassword, Password, RememberPassword } from '../../../Constant';

const CreatePwd = () => {
    return (
        <Fragment>
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col xl="12 p-0">
                            <div className='login-card1'>
                                <Form className="theme-form login-form">
                                    <H4 attrH4={{ className: 'mb-3' }}>Create Your Password</H4>
                                    <FormGroup>
                                        <Label>{NewPassword}</Label>
                                        <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                                            <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                            <div className="show-hide"><span className="show"></span></div>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>{Password}</Label>
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
                                        <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }} >{Done}</Btn>
                                    </FormGroup>
                                    <P>Don't have account?
                                        <Link to={`${process.env.PUBLIC_URL}/pages/authentication/register-simpleimg`}>
                                            <a className="ps-2" href="#javascritp">{CreateAccount}</a>
                                        </Link>
                                    </P>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
};

export default CreatePwd;
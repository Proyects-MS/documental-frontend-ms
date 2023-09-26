import React, { Fragment } from 'react';
import { Mail } from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from 'reactstrap';
import { Btn, H4, P } from '../../../AbstractElements';
import { RememberPassword, SignIn, Unlock } from '../../../Constant';

const UnlockUser = () => {
    return (
        <Fragment>
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col className="p-0">
                            <div className="login-main">
                                <div className='login-card1'>
                                    <Form className="theme-form login-form">
                                        <H4>{Unlock}</H4>
                                        <FormGroup>
                                            <Label className="col-form-label">Enter your Password</Label>
                                            <InputGroup><span className="input-group-text"><Mail /></span>
                                                <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                                <div className="show-hide"><span className="show"> </span></div>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="checkbox p-0">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }} >{Unlock}  </Btn>
                                        </FormGroup>
                                        <P>Already have an account?
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

export default UnlockUser;
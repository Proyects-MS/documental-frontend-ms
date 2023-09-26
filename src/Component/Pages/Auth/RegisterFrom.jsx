import React, { Fragment } from 'react';
import { Lock, Mail, User } from 'react-feather';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import { Btn, H4, H5, H6, LI, P, UL } from '../../../AbstractElements';
import { CreateAccount, EmailAddress, Password, PrivacyPolicy, SignIn, YourName } from '../../../Constant';
import { FaceBookSVG, GoogleSVG, InstagramSVG, TwitterSVG } from '../../../Data/svgIcons';

const RegisterFrom = () => {
    return (
        <Fragment>
            <Form className="theme-form login-form">
                <div className="login-header text-center">
                    <H4>Create your account</H4>
                    <H6>Enter your personal details to create account</H6>
                </div>
                <FormGroup>
                    <UL attrUL={{ className: 'simple-list login-social flex-row' }}>
                        <LI><a href="https://www.google.com/" >
                            <GoogleSVG />
                        </a></LI>
                        <LI><a href="https://twitter.com/" >
                            <TwitterSVG />
                        </a></LI>
                        <LI><a href="https://www.instagram.com/" >
                            <InstagramSVG />
                        </a></LI>
                        <LI><a href="https://www.facebook.com/" >
                            <FaceBookSVG />
                        </a></LI>
                    </UL>
                </FormGroup>
                <div className="login-social-title">
                    <H5>Sign in with Email</H5>
                </div>
                <FormGroup className="form-group">
                    <Label>{YourName}</Label>
                    <div className="small-group">
                        <InputGroup><span className="input-group-text"><User /></span>
                            <Input className="form-control" type="text" required="" placeholder="Fist Name" />
                        </InputGroup>
                        <InputGroup><span className="input-group-text"><User /></span>
                            <Input className="form-control" type="email" required="" placeholder="Last Name" />
                        </InputGroup>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>{EmailAddress}</Label>
                    <InputGroup><span className="input-group-text"><Mail /></span>
                        <Input className="form-control" type="email" required="" placeholder="Test@gmail.com" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label>{Password}</Label>
                    <InputGroup><span className="input-group-text"><Lock /></span>
                        <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                        <div className="show-hide"><span className="show"></span></div>
                    </InputGroup>
                </FormGroup>
                <FormGroup className="form-group">
                    <div className="checkbox">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">Agree with <span>{PrivacyPolicy}</span></Label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }}>{CreateAccount}</Btn>
                </FormGroup>
                <P>Already have an account?
                    <Link to={`${process.env.PUBLIC_URL}/login`} className="ms-2">
                        {SignIn}
                    </Link>
                </P>
            </Form>
        </Fragment>
    );
};

export default RegisterFrom;
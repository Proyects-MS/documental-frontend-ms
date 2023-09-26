import React, { Fragment } from 'react';
import { Lock, Mail } from 'react-feather';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, H5, P, H6, UL, LI } from '../../../AbstractElements';
import { CreateAccount, EmailAddress, ForgotPassword, Login, Password, RememberPassword, SignIn } from '../../../Constant';
import { FaceBookSVG, GoogleSVG, InstagramSVG, TwitterSVG } from '../../../Data/svgIcons';

const LoginForm = () => {
    return (
        <Fragment>
            <Form className="theme-form login-form">
                <div className="login-header text-center">
                    <H4>{Login}</H4>
                    <H6>Welcome back! Log in to your account.</H6>
                </div>
                <FormGroup>
                    <UL attrUL={{ className: 'simple-list login-social flex-row' }}>
                        <LI><a href="https://www.google.com/">
                            <GoogleSVG />
                        </a></LI>
                        <LI><a href="https://twitter.com/">
                            <TwitterSVG />
                        </a></LI>
                        <LI><a href="https://www.instagram.com/">
                            <InstagramSVG />
                        </a></LI>
                        <LI><a href="https://www.facebook.com/">
                            <FaceBookSVG />
                        </a></LI>
                    </UL>
                </FormGroup>
                <div className="login-social-title">
                    <H5>Sign in with Email</H5>
                </div>
                <FormGroup>
                    <Label>{EmailAddress}</Label>
                    <div className="input-group"><span className="input-group-text"><Mail /></span>
                        <Input className="form-control" type="email" required="" placeholder="Test@gmail.com" />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>{Password}</Label>
                    <div className="input-group"><span className="input-group-text"><Lock /></span>
                        <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                        <div className="show-hide"><span className="show"></span></div>
                    </div>
                </FormGroup>
                <FormGroup className="login-btn form-group">
                    <div className="checkbox">
                        <Input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`} className="link">
                        {ForgotPassword}?
                    </Link>
                </FormGroup>
                <FormGroup>
                    <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }} >{SignIn}</Btn>
                </FormGroup>
                <P>Don't have account?
                    <Link to={`${process.env.PUBLIC_URL}/pages/authentication/create-pwd`} className="ms-2">
                        {CreateAccount}
                    </Link>
                </P>
            </Form>
        </Fragment>
    );
};

export default LoginForm;
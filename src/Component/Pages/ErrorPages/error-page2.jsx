import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import { Btn, H2, P } from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE } from '../../../Constant';
import { Error2 } from '../../../Data/svgIcons';

const ErrorPage2 = () => {
    return (
        <Fragment>
            <div className="page-wrapper" id="pageWrapper">
                <div className="error-wrapper">
                    <Container>
                        <div className="error-page1">
                            <div className="svg-wrraper">
                                <Error2 />
                            </div>
                            <Col md="8" className="offset-md-2">
                                <H2>500 - Internal server error</H2>
                                <P attrPara={{ className: 'sub-content' }} >The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</P>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <Btn attrBtn={{ className: 'btn-lg', color: 'primary' }}>{BACK_TO_HOME_PAGE}</Btn>
                                </Link>
                            </Col>
                        </div>
                    </Container>
                </div>
            </div>
        </Fragment>
    );
};

export default ErrorPage2;
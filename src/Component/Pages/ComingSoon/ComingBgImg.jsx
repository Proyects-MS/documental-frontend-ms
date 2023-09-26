import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import { WE_ARE_COMING_SOON } from '../../../Constant';
import CountdownData from './CountdownData';

const ComingBgImg = () => {
    return (
        <Fragment>
            <div className="page-wrapper" id="pageWrapper">
                <Container fluid={true} className="p-0 m-0">
                    <div className="comingsoon comingsoon-bgimg">
                        <div className="comingsoon-inner text-center">
                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                <Image attrImage={{ className: 'img-fluid for-light', src: `${require('../../../assets/images/logo/small-logo.png')}`, alt: '' }} />
                            </Link>
                            <H5>{WE_ARE_COMING_SOON}</H5>
                            <div className="countdown" id="clockdiv">
                                <CountdownData />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default ComingBgImg;
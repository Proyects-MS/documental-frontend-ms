import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { H2, H4, LI, UL } from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE, MAINTENANCE } from '../../../Constant';

const Maintenance = () => {
    return (
        <Fragment>
            <section>
                <div className="page-wrapper">
                    <div className="error-wrapper maintenance-bg">
                        <Container>
                            <UL attrUL={{ className: 'simple-list maintenance-icons' }} >
                                <LI><i className="fa fa-cog"></i></LI>
                                <LI><i className="fa fa-cog"></i></LI>
                                <LI><i className="fa fa-cog"></i></LI>
                            </UL>
                            <div className="maintenance-heading">
                                <H2 attrH2={{ className: 'headline' }} >{MAINTENANCE}</H2>
                            </div>
                            <H4 attrH4={{ className: 'sub-content' }} >Our Site is Currently under maintenance We will be back Shortly<br />Thank You For Patience</H4>
                            <div>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`} className="btn btn-primary-gradien btn-lg text-light">{BACK_TO_HOME_PAGE}
                                </Link>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Maintenance;
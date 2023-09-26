import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';
import { H5, Image, P } from '../../../AbstractElements';
import teen from '../../../assets/images/avtar/teenager.png';

const Activity2 = () => {
    return (
        <Fragment>
            <tr>
                <td>
                    <Media>
                        <div className="square-box me-2">
                            <Image attrImage={{ className: 'img-fluid b-r-5', src: `${teen}`, alt: '' }} />
                        </div>
                        <Media body>
                            <Link to={`${process.env.PUBLIC_URL}/user/userprofile`}>
                                <H5>Lena Burton added new</H5>
                            </Link>
                            <P>Comment on 
                                <span className="font-primary"> Vegetarian food fest</span>
                            </P>
                            <div className="activity-msg">
                                <span className="activity-msg-box">
                                    Again this was our mistake, we are truly sorry for not adhering to a strictly non animal product event.
                                </span>
                            </div>
                        </Media>
                    </Media>
                </td>
                <td>
                    <span className="badge badge-light-theme-light font-theme-light">10 jul 2022</span>
                </td>
            </tr>
        </Fragment>
    );
};
export default Activity2;
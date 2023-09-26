import React, { Fragment } from 'react';
import { Media } from 'reactstrap';
import { H5, Image, P } from '../../../AbstractElements';
import TeacherImage from '../../../assets/images/avtar/teacher.png';

const Notification2Crypto = () => {
    return (
        <Fragment>
            <tr>
                <td>
                    <Media>
                        <div className="square-box"><Image attrImage={{ src: `${TeacherImage}`, alt: '' }} /></div>
                        <Media body>
                            <H5>Lottie Marsh<span className="font-theme-light f-w-400 f-12 ms-3">Sent you a message</span></H5>
                            <P>Bro iki nggo tutu es anakmu yo, judi neh!!</P><span className="font-primary f-12">+380.234</span>
                        </Media>
                    </Media>
                </td>
                <td><span className="badge badge-light-theme-light font-theme-light">10 jul 2022</span></td>
            </tr>
        </Fragment>
    );
};
export default Notification2Crypto;
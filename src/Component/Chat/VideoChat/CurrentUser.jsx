import React, { Fragment } from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../../AbstractElements';

const CurrentUserVideo = () => {
    var images = require.context('../../../assets/images/user/', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };
    return (
        <Fragment>
            <Media>
                <Image attrImage={{
                    src: `${dynamicImage('12.png')}`
                    , className: 'rounded-circle user-image'
                    , alt: ''
                }} />
                <div className="about">
                    <div className="name f-w-600">{`Johan Deo`}</div>
                    <div className="status">{`Out is my favorite`}</div>
                </div>
            </Media>
        </Fragment>
    );
};

export default CurrentUserVideo;
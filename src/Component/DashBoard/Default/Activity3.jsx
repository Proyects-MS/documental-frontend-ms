import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { Media } from 'reactstrap';
import { H5, Image, P } from '../../../AbstractElements';
import Imageavtar from '../../../assets/images/avtar/chinese.png';
import Images from '../../../assets/images/dashboard/img-26.jpg';
import Images1 from '../../../assets/images/dashboard/image-20.jpg';

const Activity3 = () => {
    const initilindex = { index: 0, isOpen: false };
    const [photoIndex, setPhotoIndex] = useState(initilindex);

    const handleClick = (val) => {
        setPhotoIndex({ ...photoIndex, index: val, isOpen: true });
    };
    const images = [
        'dashboard/img-26.jpg',
        'dashboard/image-20.jpg'
    ];
    const onMovePrev = () => {
        const prev = (photoIndex.index + images.length - 1) % images.length;
        setPhotoIndex({ ...photoIndex, index: prev });
    };
    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % images.length;
        setPhotoIndex({ ...photoIndex, index: next });
    };
    return (
        <Fragment>
            <tr>
                <td>
                    <Media>
                        <div className="square-box me-2">
                            <Image attrImage={{ className: 'img-fluid b-r-5', src: `${Imageavtar}`, alt: '' }} />
                        </div>
                        <Media body>
                            <Link to={`${process.env.PUBLIC_URL}/user/userprofile`}>
                                <H5>Max Simmons attached 2</H5>
                            </Link>
                            <P>photos to <span className="font-primary">Food photography Class</span></P>
                            <div className="d-flex">
                                <div className="inner-img" onClick={() => handleClick(0)} >
                                    <Image attrImage={{ className: 'img-fluid img-40', src: `${Images}`, alt: 'Product-1' }} />
                                </div>
                                <div className="inner-img ms-3" onClick={() => handleClick(1)}>
                                    <Image attrImage={{ className: 'img-fluid img-40', src: `${Images1}`, alt: 'Product-2' }} />
                                </div>
                            </div>
                            {photoIndex.isOpen && (
                                <Lightbox
                                    mainSrc={require(`../../../assets/images/${images[photoIndex.index]}`)}
                                    nextSrc={require(`../../../assets/images/${images[(photoIndex.index + 1) % images.length]}`)}
                                    prevSrc={require(`../../../assets/images/${images[(photoIndex.index + images.length - 1) % images.length]}`)}
                                    imageTitle={photoIndex.index + 1 + '/' + images.length}
                                    onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                    onMovePrevRequest={onMovePrev}
                                    onMoveNextRequest={onMoveNext}
                                />
                            )}
                        </Media>
                    </Media>
                </td>
                <td> <span className="badge badge-light-theme-light font-theme-light">22 Jun 2022</span></td>
            </tr>
        </Fragment >
    );
};
export default Activity3;
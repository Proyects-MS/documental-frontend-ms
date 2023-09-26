import React, { Fragment, useState } from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import Emoji from '../../../assets/images/crypto-dashboard/emoji.png';
import ChatUser1 from '../../../assets/images/avtar/chat-user-1.png';
import ChatUser2 from '../../../assets/images/avtar/chat-user-2.png';
import Rectangle from '../../../assets/images/dashboard-2/rectangle-26.png';
import Rectangle1 from '../../../assets/images/dashboard-2/rectangle-27.png';
import Lightbox from 'react-image-lightbox';

const ChatMessage = () => {
    const initilindex = { index: 0, isOpen: false };
    const [photoIndex, setPhotoIndex] = useState(initilindex);

    const handleClick = (val) => {
        setPhotoIndex({ ...photoIndex, index: val, isOpen: true });
    };
    const images = [
        'dashboard-2/rectangle-26.jpg',
        'dashboard-2/rectangle-27.jpg'
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
            <Media className="right-side-chat">
                <Media body>
                    <div className="msg-box"> Well I am not sure. The rest of the team is not here yet<Image attrImage={{ className: 'img-fluid', src: `${Emoji}`, alt: '' }} /></div>
                </Media>
                <div className="square-box ms-2"><a href="#javascript">
                    <Image attrImage={{ src: `${ChatUser2}`, alt: '' }} /></a></div>
            </Media>
            <Media className="left-side-chat">
                <div className="square-box"><a href="#javascript">
                    <Image attrImage={{
                        src: `${ChatUser1}`, alt: ''
                    }} /> </a>
                </div>
                <Media body>
                    <div className="img-msg-box">
                        <Image attrImage={{ className: 'd-inline-block', src: `${Rectangle}`, alt: '', onClick: () => handleClick(0) }} />
                        <Image attrImage={{ className: 'd-inline-block', src: `${Rectangle1}`, alt: '', onClick: () => handleClick(1) }} />
                    </div>
                </Media>
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
        </Fragment>
    );
};
export default ChatMessage;
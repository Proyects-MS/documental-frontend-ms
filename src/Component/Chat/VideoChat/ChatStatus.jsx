import React, { Fragment, useContext } from 'react';
import { Media } from 'reactstrap';
import { Image, LI, UL } from '../../../AbstractElements';
import errorImg from '../../../assets/images/search-not-found.png';
import SearchChatList from '../ChatApp/SearchChatList';
import ChatAppContext from '../../../_helper/chat-app';
import CurrentUserVideo from './CurrentUser';

const ChatStatus = () => {
    const { allMemberss } = useContext(ChatAppContext);
    var images = require.context('../../../assets/images', true);
    const dynamicImage = (image) => {
        return images(`./${image}`);
    };

    return (
        <Fragment>
            <div className="chat-box">
                <div className="chat-left-aside">
                    <CurrentUserVideo />
                    <div className="people-list" id="people-list">
                        <SearchChatList />
                        {allMemberss && allMemberss.length > 0 ? (
                            <UL attrUL={{ className: 'simple-list list custom-scrollbar' }} >
                                {allMemberss
                                    .map((item) => {
                                        return (
                                            <LI attrLI={{ className: `clearfix`, }} key={item.id} >
                                                <Media>
                                                    <Image attrImage={{
                                                        src: `${dynamicImage(item.thumb)}`,
                                                        className: 'rounded-circle user-image'
                                                        , alt: ''
                                                    }} />
                                                    <div
                                                        className={`status-circle ${item.online === true
                                                            ? 'online'
                                                            : 'offline'
                                                            }`}
                                                    ></div>
                                                    <Media body>
                                                        <div className="about">
                                                            <div className="name">{item.name}</div>
                                                            <div className="status">{item.status}</div>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </LI>
                                        );
                                    })}
                            </UL>
                        ) : (
                            <Image attrImage={{
                                className: 'img-fluid m-auto',
                                src: { errorImg },
                                alt: ''
                            }} />
                        )}
                    </div>
                </div>
            </div>
        </Fragment >
    );
};
export default ChatStatus;
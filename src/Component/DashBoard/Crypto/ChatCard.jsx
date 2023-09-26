import React, { Fragment } from 'react';
import { MoreHorizontal, Send } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Input, InputGroup, Media } from 'reactstrap';
import { H5, Image, LI, UL } from '../../../AbstractElements';
import ChatMessage from './ChatMessage';
import Emoji from '../../../assets/images/crypto-dashboard/emoji.png';
import ChatUser1 from '../../../assets/images/avtar/chat-user-1.png';
import { Chat, Earlist, Latest } from '../../../Constant';

const ChatCard = () => {
    return (
        <Fragment>
            <Col xl='3' md='6' className="dash-31 dash-xl-50 dash-xlorder-1 box-col-6">
                <Card className="cripto-chat">
                    <CardHeader className="card-no-border">
                        <Media className="media-dashboard">
                            <Media body>
                                <H5 attrH5={{ className: 'mb-0' }}>{Chat}   </H5>
                            </Media>
                            <div className="icon-box onhover-dropdown"><MoreHorizontal />
                                <div className="icon-box-show onhover-show-div">
                                    <UL>
                                        <LI> <a href='#javascript'>{Latest} </a></LI>
                                        <LI> <a href='#javascript'>{Earlist}  </a></LI>
                                    </UL>
                                </div>
                            </div>
                        </Media>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <div className="chat">
                            <Media className="left-side-chat">
                                <div className="square-box"> <a href="#javascript"><Image attrImage={{ src: `${ChatUser1}`, alt: '' }} /></a></div>
                                <Media body>
                                    <div className="msg-box"> Project has been already finished and i have results to show you. </div>
                                </Media>
                            </Media>
                            <ChatMessage />
                        </div>
                        <InputGroup>
                            <div className="input-group-text bg-primary"><Image attrImage={{ src: `${Emoji}`, alt: '' }} /></div>
                            <Input className="form-control" type="text" placeholder="Type a message....." />
                            <div className="input-group-text bg-primary"><Send className="font-white" /></div>
                        </InputGroup>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default ChatCard;
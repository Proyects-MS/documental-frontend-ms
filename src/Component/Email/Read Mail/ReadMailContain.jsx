import React, { Fragment } from 'react';
import { Card, Col, Media, Row } from 'reactstrap';
import { useLocation } from 'react-router';
import { H5, H6, LI, P, UL, Image } from '../../../AbstractElements';
import user from '../../../assets/images/user/user.png';
import emai1 from '../../../assets/images/email/1.jpg';
import emai2 from '../../../assets/images/email/2.jpg';
import emai3 from '../../../assets/images/email/3.jpg';

const MailContain = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div className="email-right-aside">
        <Card className="email-body">
          <div className="email-profile">
            <div className="email-right-aside">
              <div className="email-body">
                <div className="email-content">
                  <div className="email-top">
                    <Row>
                      <Col xl="12">
                        <Media><Image attrImage={{
                          className: 'me-3 rounded-circle'
                          , src: `${user}`, alt: ''
                        }} />
                          <Media body>
                            <H6 attrH6={{ className: 'd-block' }}>{location.state ? location.state : 'MARKJENCO'}</H6>
                            <P>Mattis luctus.Donec nisi diam text.</P>
                          </Media>
                        </Media>
                      </Col>
                    </Row>
                  </div>
                  <div className="email-wrapper">
                    <div className="emailread-group">
                      <div className="read-group">
                        <P>Hello</P>
                        <P>Dear Sir Good Morning,</P>
                      </div>
                      <div className="read-group">
                        <H5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</H5>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. </P>
                        <P attrPara={{ className: 'm-t-10' }}>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna</P>
                      </div>
                    </div>
                    <div className="emailread-group">
                      <H6 attrH6={{ className: 'text-muted mb-0' }}><i className="icofont icofont-clip"></i> ATTACHMENTS</H6><a className="text-muted text-end right-download font-primary f-w-600" href="#javascript"><i className="fa fa-long-arrow-down me-2"></i>Download All</a>
                      <div className="clearfix"></div>
                      <div className="attachment">
                        <UL attrUL={{ className: 'simple-list flex-row' }}>
                          <LI><Image attrImage={{ className: 'img-fluid', src: `${emai1}`, alt: '' }} /></LI>
                          <LI><Image attrImage={{ className: 'img-fluid', src: `${emai2}`, alt: '' }} /></LI>
                          <LI><Image attrImage={{ className: 'img-fluid', src: `${emai3}`, alt: '' }} /></LI>
                        </UL>
                      </div>
                    </div>
                    <div className="emailread-group">
                      <textarea className="form-control" rows="4" cols="50" placeholder="write about your nots"></textarea>
                      <div className="action-wrapper">
                        <UL attrUL={{ className: 'simple-list actions flex-row' }}>
                          <LI><a className="btn btn-primary" href="#javascript"><i className="fa fa-reply me-2"></i>Reply</a></LI>
                          <LI><a className="btn btn-secondary" href="#javascript"><i className="fa fa-reply-all me-2"></i>Reply All</a></LI>
                          <LI><a className="btn btn-danger" href="#javascript"><i className="fa fa-share me-2"></i>Forward</a></LI>
                        </UL>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};
export default MailContain;
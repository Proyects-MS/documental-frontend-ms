import { H6, P, Image } from '../../AbstractElements';
import imgg from '../../assets/images/user/1.jpg';
import time2 from '../../assets/images/social-app/timeline-2.png';
import smily from '../../assets/images/smiley.png';
import { Card, CardBody, Col, Input, Media } from 'reactstrap';
import { MoreVertical } from 'react-feather';
import React, { Fragment } from 'react';

const TimeLineContain2 = () => {
    const comment = 'we are working for the dance and sing songs.this car is very awesome for the youngster.please vote this car and like our post';
    const comment2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse sed urna in justo euismod condimentum.Fusceplacerat enim et odio molestie sagittis.';
    return (
      <Fragment>
        <Col sm="12">
          <Card>
            <CardBody>
              <div className="new-users-social">
                <Media><Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: `${imgg}`, alt: '', }} />
                  <div className="media-body">
                    <H6 attrH6={{ className: 'mb-0 f-w-700' }}>ELANA</H6> <P>January, 12,2022</P>
                  </div><span className="pull-right mt-0"><MoreVertical /></span></Media>
              </div><Image attrImage={{ className: 'img-fluid', alt: '', src: `${time2}` }} />
              <div className="timeline-content"> <P>{comment2}</P>
                <div className="like-content"><span><i className="fa fa-heart font-danger"></i></span><span className="pull-right comment-number"><span>20 </span><span><i className="fa fa-share-alt me-0"></i></span></span><span className="pull-right comment-number"><span>10 </span><span><i className="fa fa-comments-o"></i></span></span></div>
                <div className="social-chat">
                  <div className="your-msg">
                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                      <div className="media-body"><span className="f-w-600">Jason Borne <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                        <P>{comment}</P></div></Media></div>
                  <div className="your-msg">
                    <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} />
                      <div className="media-body"><span className="f-w-600">Issa Bell <span>1 Year Ago <i className="fa fa-reply font-primary"></i></span></span>
                        <P>{comment}</P></div></Media>
                  </div><div className="text-center"><a className="f-w-600" href="#javascript">More Commnets</a></div>
                </div>
                <div className="comments-box">
                  <Media><Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${imgg}` }} /> <div className="media-body"> <div className="input-group text-box">
                    <Input className="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
                    <div className="input-group-text"><Image attrImage={{ src: `${smily}`, alt: '' }} /></div>
                  </div>
                  </div>
                  </Media>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Fragment >
    );
};
export default TimeLineContain2;
import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Container, Media, Row } from 'reactstrap';
import { MarkJecno, MARKJENCOEMAIL } from '../../Constant';
import Img from '../../assets/images/user/user.png';
import { H6, Image, P } from '../../AbstractElements';
import NavTab from './NavTab';
import BookmarksTabs from './BookmarksTabs';
import { Link } from 'react-router-dom';

const BookmarksContain = () => {
  const [Sidebar, setSidebar] = useState(false);
  const OnClickHandel = () => {
    setSidebar(!Sidebar);
  };
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl="3" className="box-col-3 xl-30">
              <div className="md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnClickHandel}>Bookmark Filter</a>
                <div className={`md-sidebar-aside ${Sidebar ? 'open' : ''}`}>
                  <Card>
                    <CardBody>
                      <div className="email-app-sidebar left-bookmark custom-scrollbar">
                        <Media>
                          <div className="media-size-email">
                            <Image attrImage={{
                              className: 'me-3 rounded-circle',
                              src: `${Img}`, alt: ''
                            }} />
                          </div>
                          <Media body>
                            <H6 attrH6={{ className: 'f-w-600' }}>
                              <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{MarkJecno}</Link>
                            </H6>
                            <P>{MARKJENCOEMAIL}</P>
                          </Media>
                        </Media>
                        <NavTab />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Col>
            <Col xl="9" md="12" className="box-col-9 xl-70">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="ps-0">
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BookmarksContain;
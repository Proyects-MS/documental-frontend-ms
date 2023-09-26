import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap';
import { Clock, MoreHorizontal } from 'react-feather';
import { H5, H6, LI, UL } from '../../../AbstractElements';
import { RecentActivityData } from '../../../Data/Widgets';
import { Done, InProgress, Pending, RecentActivitys, Rejected } from '../../../Constant';

const RecentActivity = () => {
  return (
    <Fragment>
      <Col xl="4" md="6 lg-50 box-col-6 dash-lg-50">
        <div>
          <Card>
            <CardHeader className="pb-0">
              <Media>
                <Media body>
                  <H5>{RecentActivitys}</H5>
                </Media>
                <div className="icon-box onhover-dropdown"><MoreHorizontal />
                  <div className="icon-box-show onhover-show-div">
                    <UL>
                      <LI><a href='#javascript'>{Done}</a></LI>
                      <LI><a href='#javascript'> {Pending}</a></LI>
                      <LI><a href='#javascript'>{Rejected}</a></LI>
                      <LI><a href='#javascript'>{InProgress}</a></LI>
                    </UL>
                  </div>
                </div>
              </Media>
            </CardHeader>
            <CardBody>
              <div className="activity-media">
                {
                  RecentActivityData.map((item) => {
                    return (
                      <Media key={item.id}><div className="recent-circle bg-primary"></div>
                        <Media body>
                          <H6 attH6={{ className: 'font-roboto' }}>{item.title}</H6>
                          <span><Clock className='me-2' /><span className="font-roboto">25 July 2022 | 20 hours ago</span></span>
                        </Media>
                      </Media>
                    );
                  })
                }
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Fragment >
  );
};
export default RecentActivity;
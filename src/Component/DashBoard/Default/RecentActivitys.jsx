import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, Image, LI, P, UL } from '../../../AbstractElements';
import teacher from '../../../assets/images/avtar/teacher.png';
import Activity2 from './Activity2';
import Activity3 from './Activity3';

const RecentActivitys = () => {
  return (
    <Fragment>
      <Col xl='4' md='6' className='dash-31 dash-xl-50 box-col-12'>
        <Card className="recent-activity">
          <CardHeader className="card-no-border">
            <Media className="media-dashboard">
              <Media body>
                <H5 attrH5={{ className: 'mb-0' }}>Recent Activity</H5>
              </Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'>Latest </a></LI>
                    <LI><a href='#javascript'>Earlist</a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="table-responsive">
              <Table className="table-bordernone">
                <tbody>
                  <tr>
                    <td>
                      <Media>
                        <div className="square-box me-2">
                          <Image attrImage={{ className: 'img-fluid b-r-5', src: `${teacher}`, alt: '' }} />
                        </div>
                        <Media body>
                          <Link to={`${process.env.PUBLIC_URL}/user/userprofile`}>
                            <H5>Alana Brady added new event</H5>
                          </Link>
                          <P attrPara={{ className: 'font-primary' }}>Sunday Cooking Class</P>
                        </Media>
                      </Media>
                    </td>
                    <td><span className="badge badge-light-theme-light font-theme-light">2 hours ago</span></td>
                  </tr>
                  <Activity2 />
                  <Activity3 />
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col >
    </Fragment >
  );
};
export default RecentActivitys;
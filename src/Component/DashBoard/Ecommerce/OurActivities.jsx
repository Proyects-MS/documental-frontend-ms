import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { MoreHorizontal } from 'react-feather';
import { H5, LI, P, UL } from '../../../AbstractElements';
import { TableRowData } from '../../../Data/DashEcommerce';

const OurActivities = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="dash-xl-50 dash-29 box-col-6">
        <Card className='our-activities'>
          <CardHeader className='card-no-border'>
            <Media className="media-dashboard">
              <Media body>
                <H5 attrH5={{ className: 'mb-0' }}>Our Activities</H5>
              </Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'>Latest </a></LI>
                    <LI><a href='#javascript'> Earlist</a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="table-responsive">
              <Table borderless>
                <tbody>
                  {TableRowData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <Media>
                            <div className='icon-wrappar'>
                              <i className={item.Icons}></i>
                            </div>
                            <Media body>
                              <a href='#javascript'><H5>{item.title}</H5></a>
                              <P>{item.place}</P>
                            </Media>
                          </Media>
                        </td>
                        <td>
                          <span className="badge badge-light-theme-light font-theme-light">{item.time}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default OurActivities;
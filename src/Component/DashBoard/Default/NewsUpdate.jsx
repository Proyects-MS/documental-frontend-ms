import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { MoreHorizontal } from 'react-feather';
import { Link } from 'react-router-dom';
import { H5, Image, LI, P, UL } from '../../../AbstractElements';
import { NewsUpdate } from '../../../Data/DashDefault';
import { Today } from '../../../Constant';

const NewsUpdates = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="dash-31 dash-xl-50 box-col-6">
        <Card className='news-update'>
          <CardHeader className="card-no-border">
            <div className="header-top">
              <H5 attrH5={{ className: 'm-0' }}>News &amp; Update</H5>
              <div className="icon-box onhover-dropdown">
                <MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javacsript'>{Today}</a></LI>
                    <LI><a href='#javacsript'> Yesterday</a></LI>
                    <LI><a href='#javacsript'>Tommorow</a></LI>
                  </UL>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="table-responsive">
              <Table borderless>
                <tbody>
                  {
                    NewsUpdate.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <Media>
                              <Image attrImage={{ className: 'img-fluid me-3 b-r-5', src: `${item.img}`, alt: '' }} />
                              <Media body>
                                <Link to={`${process.env.PUBLIC_URL}/blog/blogsingle`}>
                                  <H5>{item.title}</H5>
                                </Link>
                                <P>{item.desp}</P>
                              </Media>
                            </Media>
                          </td>
                          <td><span className="badge badge-light-theme-light font-theme-light">{item.time}</span></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default NewsUpdates;
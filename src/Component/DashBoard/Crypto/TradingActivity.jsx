import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, LI, UL } from '../../../AbstractElements';
import { Done, Pending } from '../../../Constant';
import { TradingActivityData } from '../../../Data/DashDefault/CryptoData';

const TradingActivity = () => {
  return (
    <Fragment>
      <Col xl='4' md='6' className="dash-35 dash-xl-50 box-col-6">
        <Card className="trading-activities ongoing-project">
          <CardHeader className="card-no-border">
            <Media>
              <Media body>
                <H5 attrH5={{ className: 'mb-0' }}>Trading Activities</H5>
              </Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'>{Done}</a></LI>
                    <LI><a href='#javascript'>{Pending}</a></LI>
                    <LI><a href='#javascript'>Rejected</a></LI>
                    <LI><a href='#javascript'>In Progress</a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="table-responsive">
              <Table borderless>
                <tbody>
                  {
                    TradingActivityData.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <Media>{item.arrow}
                              <div className={item.class}>
                                {item.icon}
                              </div>
                              <Media body>
                                {item.name1}
                              </Media>
                            </Media>
                          </td>
                          {item.num1}
                          <td>{item.date}</td>
                          <td className="text-center">
                            {item.status}
                          </td>
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
export default TradingActivity;
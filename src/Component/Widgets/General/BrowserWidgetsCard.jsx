import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { LI, UL, H5 } from '../../../AbstractElements';
import { Browser, Daily, Done, InProgress, Monthly, Name, Pending, Rejected, UsageinBrowser, Weekly } from '../../../Constant';
import { BrowserWidgetsCardData } from '../../../Data/Widgets';

const BrowserWidgetsCard = () => {
  return (
    <Fragment>
      <Col sm='12'>
        <Card className="browser-table">
          <CardHeader>
            <Media>
              <Media body>
                <H5>{UsageinBrowser}</H5>
              </Media>
              <div className="icon-box onhover-dropdown"><MoreHorizontal />
                <div className="icon-box-show onhover-show-div">
                  <UL>
                    <LI><a href='#javascript'>{Done}</a></LI>
                    <LI><a href='#javascript'>{Pending}</a></LI>
                    <LI><a href='#javascript'>{Rejected}</a></LI>
                    <LI><a href='#javascript'>{InProgress}</a></LI>
                  </UL>
                </div>
              </div>
            </Media>
          </CardHeader>
          <CardBody>
            <div className="table-responsive mb-0">
              <Table borderless>
                <thead>
                  <tr>
                    <th>{Browser}</th>
                    <th>{Name}</th>
                    <th>{Daily}</th>
                    <th>{Weekly}</th>
                    <th>{Monthly}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    BrowserWidgetsCardData.map((item) => {
                      return (
                        <Fragment key={item.id}>
                          {item.data}
                        </Fragment>
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
export default BrowserWidgetsCard;
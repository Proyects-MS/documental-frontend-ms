import React, { Fragment } from 'react';
import { MoreHorizontal } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, Image, LI, UL } from '../../../AbstractElements';
import { Designation, Done, Employee_Status, Experience, InProgress, Name, Pending, Rejected, SkillLevel } from '../../../Constant';
import { employeeStatus } from '../../../Data/Widgets/index';

const EmoployeeStatus = () => {
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Col xl='6' className='xl-50 box-col-6'>
        <Card className="employee-status">
          <CardHeader className="pb-0">
            <Media>
              <Media body>
                <H5>{Employee_Status}</H5>
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
            <div className="user-status table-responsive">
              <Table borderless>
                <thead>
                  <tr>
                    <th scope="col">{Name}</th>
                    <th scope="col">{Designation}</th>
                    <th scope="col">{SkillLevel}</th>
                    <th scope="col">{Experience}</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeStatus.map(data => (
                    <tr key={data.id}>
                      <td>
                        <Media>
                          <Image attrImage={{ src: `${dynamicImage(data.imagepath)}`, alt: '' }} />
                          <Media body>
                            <H5>{data.title} <span className="text-muted">({data.online})</span></H5>
                          </Media>
                        </Media>
                      </td>
                      <td>{data.position}</td>
                      <td>
                        <div className="progress-showcase">
                          <div className="progress" style={{ height: '8px' }}>
                            <div className={`progress-bar bg-${data.classname}`} role="progressbar" style={{ 'width': data.skill }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                      <td className="digits">{data.exp}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default EmoployeeStatus;
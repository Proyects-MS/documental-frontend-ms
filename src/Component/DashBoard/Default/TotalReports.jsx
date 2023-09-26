import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CardBody, Col, Media, Row } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';

const TotalReports = () => {
  return (
    <Fragment>
      <CardBody className="pt-0">
        <Row>
          <Col xl='6' className="report-main">
            <div className="report-content text-center">
              <P attrPara={{ className: 'font-theme-light' }}>This Week</P>
              <H5>+86.53%</H5>
              <div className="progress progress-round-primary">
                <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="report-content text-center">
              <P attrPara={{ className: 'font-theme-light' }}>Last Week</P>
              <H5>-34.50%</H5>
              <div className="progress progress-round-secondary">
                <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <Media className="report-perfom">
              <Media body>
                <P attrPara={{ className: 'font-theme-light' }}>Performance </P>
                <H5 attrH5={{ className: 'm-0' }}>+93.82%</H5>
              </Media>
              <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/blog/blogsingle`}>New Report</Link>
            </Media>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default TotalReports;
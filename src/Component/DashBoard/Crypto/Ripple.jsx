import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ArrowUp } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap';
import { H5, H6 } from '../../../AbstractElements';
import { RippleChart } from '../../../Pages/DashBoard/Crypto/CryptoChartData/ChartData';
import { RippleSvg } from '../SvgIcons';

const Ripple = () => {
  return (
    <Fragment>
      <Col xl='3' md='6' className="dash-lg-50 box-col-6">
        <Card className="crypto-chart">
          <CardHeader className="card-no-border">
            <Media>
              <Media body>
                <div className="coin-logo-img bg-light-secondary">
                  <RippleSvg />
                </div>
                <H5 attrH5={{ className: 'font-secondary' }}>Ripple</H5><span>(XRP)</span>
              </Media>
              <div className="media-end">
                <H6>52367.32</H6><span className="badge badge-light-secondary"><ArrowUp />2.8</span>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="p-0">
            <div className="crypto-dashborad-chart">
              <ReactApexChart
                options={RippleChart.options}
                series={RippleChart.series}
                type='area'
                height='100'
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default Ripple;
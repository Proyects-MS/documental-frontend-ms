import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ArrowUp } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap';
import { H5, H6 } from '../../../AbstractElements';
import { Bitcoin, BTC } from '../../../Constant';
import { BitcoinChart } from '../../../Pages/DashBoard/Crypto/CryptoChartData/ChartData';
import { BitCoinSvg } from '../SvgIcons';

const BitCoin = () => {
  return (
    <Fragment>
      <Col xl='3' md='6' className="dash-lg-50 box-col-6">
        <Card className="crypto-chart">
          <CardHeader className="card-no-border">
            <Media>
              <Media body>
                <div className="coin-logo-img bg-light-primary">
                  <BitCoinSvg />
                </div>
                <H5 attrH5={{ className: 'font-primary' }}>{Bitcoin}</H5><span>{BTC}</span>
              </Media>
              <div className="media-end">
                <H6>305.64</H6><span className="badge badge-light-primary"><ArrowUp />7.6</span>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="p-0">
            <div className="crypto-dashborad-chart">
              <ReactApexChart
                options={BitcoinChart.options}
                series={BitcoinChart.series}
                type='area'
                height='100'
                id="bitcoin-chart"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default BitCoin;
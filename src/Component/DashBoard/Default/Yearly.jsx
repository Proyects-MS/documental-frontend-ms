import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, H6, P } from '../../../AbstractElements';
import { YearlyChart } from '../../../Pages/DashBoard/ChartsData/TotalEvents';

const Yearly = () => {
  return (
    <Fragment>
      <Col xl='3' md='6' className='dash-xl-50 box-col-6'>
        <Card className="yearly-chart">
          <CardHeader className="card-no-border pb-0">
            <H5 attrH5={{ className: 'pb-2' }}>$3,500,000</H5>
            <H6 attrH6={{ className: 'font-theme-light f-14 m-0' }}>November 2022</H6>
          </CardHeader>
          <CardBody className="pt-0">
            <div>
              <ReactApexChart id="yearly-chart" options={YearlyChart.options} series={YearlyChart.series} height='160' type='line' />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl='3' md='6' className='dash-xl-50 box-col-6'>
        <Card className="bg-primary premium-access">
          <CardBody>
            <H6 attrH6={{ className: 'f-22' }}>Premium Access!</H6>
            <P>We add 20+ new features and update community in your project We add 20+ new features</P>
            <Link to={`${process.env.PUBLIC_URL}/blog/blogsingle`} className="btn btn-outline-white_color" >
              Try now for free
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Yearly;
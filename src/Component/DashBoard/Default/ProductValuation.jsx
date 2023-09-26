import { H5 } from '../../../AbstractElements';
import { ValuationChart } from '../../../Pages/DashBoard/ChartsData/ValuationChart';
import React, { Fragment } from 'react';
import ApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const ProductValuation = () => {
    return (
      <Fragment>
        <Col xl="4" lg="12" md="6" className="des-xl-50 xl-40 box-col-6 pro-valuation-sec">
          <Card>
            <CardHeader className="pb-0">
              <H5>Product Valuation</H5>
              <div className="card-header-right">
              </div>
            </CardHeader>
            <CardBody className="py-0" style={{ position: 'relative' }}>
              <div id="valuation-chart">
                <ApexChart id="apexchart" options={ValuationChart.options} series={ValuationChart.series} type="bar" height="320" />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
};
export default ProductValuation;
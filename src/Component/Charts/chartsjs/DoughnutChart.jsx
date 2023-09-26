import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { DoughnutChart } from '../../../Constant/index';
import { doughnutData, doughnutOption } from '../../../Data/ChartJsData';
import CommenHeader from '../Commen';

const DoughnutChartClass = () => {

  return (
    <Col xl="6" md="12" className='box-col-12'  >
      <Card>
        <CommenHeader title={DoughnutChart} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChartClass;
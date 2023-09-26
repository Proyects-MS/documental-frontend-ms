import React, { Fragment } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { FilledHolesInData } from '../../../Constant/index';
import CommenHeader from '../Commen';

const FilledHolesClass = ({ chartData }) => {
  return (
    <Fragment>
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <CommenHeader title={FilledHolesInData} />
          <CardBody>
            <ChartistGraph
              data={chartData.chart12Data}
              options={chartData.chart12Options}
              type={'Line'}
              className="ct-3 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default FilledHolesClass;
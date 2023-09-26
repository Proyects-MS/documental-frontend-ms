import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { H3, H4 } from '../../../AbstractElements';
import { CandlestickChart } from '../../../Pages/DashBoard/Crypto/CryptoChartData/ChartData';

const CandlestickCard = () => {
    return (
        <Fragment>
            <Col xl='7' className="dash-xl-100 box-col-12">
                <Card className="candlestick-chart">
                    <CardBody>
                        <ReactApexChart
                            id="candlestick-chart"
                            options={CandlestickChart.options}
                            series={CandlestickChart.series}
                            type='candlestick'
                            height='320'
                        />
                        <div className="candlestick-detail">
                            <H3>50 / 100</H3>
                            <H4> Total 80,52, 225 $</H4>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default CandlestickCard;
import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Media } from 'reactstrap';
import { H5, Image, P } from '../../../AbstractElements';
import TeacherImage from '../../../assets/images/avtar/teacher.png';
import { NotificationChart } from '../../../Pages/DashBoard/Crypto/CryptoChartData/ChartData';

const Notification3Crypto = () => {
    return (
        <Fragment>
            <tr>
                <td>
                    <Media>
                        <div className="square-box"><Image attrImage={{ src: `${TeacherImage}`, alt: '' }} /></div>
                        <Media body>
                            <H5>BTC<span className="font-theme-light f-w-400 f-12 ms-3">News</span></H5>
                            <P>Bitcoin baru saja  salah lho</P>
                            <div className="notification-chart-sec">
                                <ReactApexChart
                                    id="notification-chart"
                                    type='line'
                                    height='40'
                                    options={NotificationChart.options}
                                    series={NotificationChart.series} />
                                <span className="font-primary f-w-400 f-10">+39.69%</span>
                            </div>
                        </Media>
                    </Media>
                </td>
                <td><span className="badge badge-light-theme-light font-theme-light">22 Jun 2022</span></td>
            </tr>
        </Fragment>
    );
};
export default Notification3Crypto;
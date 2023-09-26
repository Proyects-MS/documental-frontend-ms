import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5, P, Image } from '../../../AbstractElements';
import { Amount, ContactNumber, Country, Date, ManageInvoices, Name, Projects, Status } from '../../../Constant';

const ManageInvoice = () => {
  const [generalData, setGeneralData] = useState([]);
  const { InvoiceData } = generalData;
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/general.json`).then((res) => setGeneralData(res.data.result));
  }, []);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {InvoiceData &&
        <Col xl="12" className="manage-invoice-sec box-col-12">
          <Card>
            <CardHeader className="pb-0">
              <H5>{ManageInvoices}</H5>
            </CardHeader>
            <CardBody>
              <div className="manage-invoice-table">
                <div className="item">
                  <div className="table-responsive manage-invoice">
                    <Table className="table-bordernone">
                      <thead>
                        <tr>
                          <th>{Name} </th>
                          <th>{Date}</th>
                          <th>{Projects}</th>
                          <th>{ContactNumber}</th>
                          <th>{Country}</th>
                          <th>{Amount}</th>
                          <th>{Status}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          InvoiceData.map((data, i) => {
                            return (
                              <tr key={i}>
                                <td> <span>{data.srNo}</span>
                                  <div className="t-title">
                                    <Image attrImage={{
                                      className: 'img-40 rounded-circle align-top', src: `${dynamicImage(data.imagePath)}`, alt: '', dataoriginaltitle: '', title: ''
                                    }} />
                                    <div className="d-inline-block align-middle">
                                      <a href="#javascript"><span className="f-w-500">{data.name}</span> </a></div>
                                  </div>
                                </td>
                                <td><P>{data.date}</P></td>
                                <td><span>{data.project}</span></td>
                                <td><P>{data.contactNumber}</P></td>
                                <td><P>{data.country}</P></td>
                                <td><P>{data.amount}</P></td>
                                <td><P>{data.status}</P></td>
                                <td>
                                  <div className="progress-showcase">
                                    <div className="progress sm-progress-bar">
                                      <div className={data.progressBar} role="progressbar" style={{ width: data.styleWidth }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>}
    </Fragment>
  );
};
export default ManageInvoice;
import TableContext from '../../../../_helper/Table';
import React, { Fragment, useContext } from 'react';
import { Col, Row, Table } from 'reactstrap';

const BreakPoint2 = () => {
    const { data } = useContext(TableContext);
    return (
      <Fragment>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table className="table-responsive-sm">
                <thead>
                  <tr>
                    <th>{'#'}</th>
                    <th>{'First Name'}</th>
                    <th>{'Last Name'}</th>
                    <th>{'Username'}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                                    data.slice(0, 3).map((item) =>
                                      <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.user_name}</td>
                                      </tr>
                                    )
                                }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table className="table table-responsive-sm">
                <thead>
                  <tr>
                    <th>{'#'}</th>
                    <th>{'First Name'}</th>
                    <th>{'Last Name'}</th>
                    <th>{'Username'}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                                    data.slice(0, 3).map((item) =>
                                      <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.user_name}</td>
                                      </tr>
                                    )
                                }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
};
export default BreakPoint2;
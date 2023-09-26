import axios from 'axios';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { MoreHorizontal } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { H5, H6, Image, LI, UL } from '../../../AbstractElements';
import { API_URL, Done } from '../../../Constant';
import { OutGoing } from '../../../Data/DashDefault';

const OutgoingProject = ({ val }) => {

  const token = localStorage.getItem('token');
  const { currentUser } = useSelector((data) => data.authUser);
  const history = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();

    return(() => {
      setData([]);
    })
  }, []);

  const getData = async () => {
    await axios({
      url: `${API_URL}processlast/${currentUser.id}`,
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setData(response.data.data);
    }).catch((error) => {
      console.log(error)
    });
  }

  const handleSelect = (item) =>{
    localStorage.setItem('selectedProcess', item) 
    history('/proceso');
  }
 
  return (
    <Fragment>
      <Col xl="12" className={`dash-100 ${val ? 'col-md-12 dash-xl-100 box-col-12' : 'col-md-12 dash-xl-100 dash-lg-100 box-col-12'}`}>
        <Card className='ongoing-project'>
          <CardHeader className="card-no-border">
            <Media className="media-dashboard">
              <Media body >
                <H5 attrH5={{ className: 'mb-0' }}>Últimos Procesos</H5>
              </Media>
            </Media>
          </CardHeader>
          <CardBody className="pt-0">
            <div>
              <Table className="table-bordernone">
                <thead>
                  <tr>
                    <th><span>Proceso</span></th>
                    <th><span>Asignado a</span></th>
                    <th><span>Fecha</span></th>
                    <th><span>Estado</span></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item) => {
                      return (
                        <tr key={item.process_id.id}>
                          <td>
                            <Media>
                              <Media body className="ps-2">
                                <div className="avatar-details">
                                  <div onClick={() => handleSelect(item.process_id.id)}>
                                    <H6 style={{cursor: 'pointer'}}>{item.process_id.name}</H6>
                                  </div>
                                </div>
                              </Media>
                            </Media>
                          </td>
                          <td className="img-content-box">
                            <H6>{item.process_id.user_asig_id.name}</H6>
                          </td>
                          <td className="img-content-box">
                            <H6>{item.process_id.date}</H6>
                          </td>
                          <td>
                            <div>{item.process_id.state_id.state}</div>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default OutgoingProject;
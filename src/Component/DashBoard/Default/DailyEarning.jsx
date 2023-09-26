import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H4, H6, Image } from '../../../AbstractElements';
import avtar from '../../../assets/images/avatar.jpg';
import { API_URL } from '../../../Constant';
import { TotalEarning, WeeklyEvent } from '../../../Pages/DashBoard/ChartsData/TotalEvents';
import UserImg from '../../../assets/images/avtar/chat-user-2.png';

const DailyEarning = () => {

  const token = localStorage.getItem('token');
  const avatar = localStorage.getItem('profileURL');
  const { currentUser } = useSelector((data) => data.authUser);

  const [data, setData] = useState({});

  useEffect(() => {
    getData();

    return(() => {
      setData([]);
    })
  }, []);

  const getData = async () => {
    await axios({
      url: `${API_URL}taskslast/${currentUser.id}`,
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) => {
      setData(response.data.data[0]);
    }).catch((error) => {
      console.log(error);
    });
  } 

  return (
    <Fragment>
      <Col xl="6" md="6" className="dash-xl-50 box-col-6">
        <Card className='pb-0 o-hidden earning-card' style={{height: 250}}>
          <CardHeader className="earning-back"></CardHeader>
          <CardBody className="p-0">
            <div className="earning-content" style={{ position: 'relative' }}>
              <Image styles={{width: 80, height: 80 }} attrImage={{ className: 'img-fluid', src: avatar ? avatar : UserImg, alt: '' }} />
              {
                data ? 
                <div>
                  <H4>Tarea pendiente</H4>
                  <span>{data.date}</span>
                  <H6>{data.name}</H6>
                </div> :
                <div>
                  <H4>No hay tareas pendientes</H4>
                  <span style={{height: 50}}></span>
                </div>
              }
              
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default DailyEarning;
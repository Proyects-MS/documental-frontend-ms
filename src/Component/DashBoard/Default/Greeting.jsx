import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H2, P, Image } from '../../../AbstractElements';
import dashImg from '../../../assets/images/images.svg';
import { useSelector } from 'react-redux';

const Greeting = () => {

  const { currentUser } = useSelector((data) => data.authUser);

  return (
    <Fragment>
      <Col xl="6" md="6" className="dash-xl-50 box-col-12">
        <Card className="profile-greeting" style={{height: 250}}>
          <CardBody>
            <Media>
              <Media body>
                <div className="greeting-user" >
                  {/* <H2 attrH3={{ className: 'mb-1 f-20 txt-primary' }}>Hola, {currentUser.name}</H2> */}
                  <H2>Bienvenido!</H2>
                  <Link to={`${process.env.PUBLIC_URL}/tareas`} className="btn btn-outline-white_color" >
                    Ir a mis tareas<i className="icon-arrow-right"></i></Link>
                </div>
              </Media>
            </Media>
            <div className="cartoon-img">
              <Image attrImage={{ className: 'img-fluid', src: `${dashImg}`, alt: '' }} styles={{width: 250, height: 250}} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default Greeting;
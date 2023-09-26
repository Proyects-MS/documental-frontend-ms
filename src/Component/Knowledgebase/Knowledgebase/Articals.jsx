import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import { ArticalsData } from '../../../Data/KnowledegesBase';

const Articals = () => {
  return (
    <Fragment>
      {
        ArticalsData.map((item) => {
          return (
            <Col xl="4" lg='6' sm="6" key={item.is} className=' xl-50'>
              <Card className="bg-primary">
                <CardBody>
                  <Media className="faq-widgets">
                    <Media body>
                      <a href='#javascript'><H5>{item.title}</H5></a>
                      <P>{item.para}</P>
                    </Media>{item.icon}
                  </Media>
                </CardBody>
              </Card>
            </Col>
          );
        })
      }
    </Fragment>
  );
};
export default Articals;
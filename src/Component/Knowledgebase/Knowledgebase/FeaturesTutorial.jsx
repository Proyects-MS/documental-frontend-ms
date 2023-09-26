import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import LearningContext from '../../../_helper/Leatning';

const FeaturesTutorial = () => {
  const { learningData } = useContext(LearningContext);
  const history = useNavigate();
  const clickApply = () => {
    history(`${process.env.PUBLIC_URL}/knowledgebase/knowledge-details`);
  };
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Col sm='12'>
        <Row>
          {
            learningData && learningData.slice(0, 4).map((item, i) => {
              return (
                <Col xl="3" sm='6' md="6" key={i} className='xl-50 box-col-6'>
                  <Card className="features-faq product-box">
                    <div className="faq-image product-img">
                      <Image attrImage={{ className: 'img-fluid', src: `${dynamicImage(item.img)}`, alt: '' }} />
                      <div className="product-hover">
                        <UL attrUL={{ className: 'simple-list' }}>
                          <LI><i className="icon-link" onClick={clickApply}></i></LI>
                          <LI><i className="icon-import"></i></LI>
                        </UL>
                      </div>
                    </div>
                    <CardBody>
                      <H6>{item.title}</H6>
                      <P>{item.short_description}</P>
                    </CardBody>
                    <CardFooter><span>{item.date}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></CardFooter>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </Col>
    </Fragment>
  );
};
export default FeaturesTutorial;
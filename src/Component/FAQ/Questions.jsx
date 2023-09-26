import React, { Fragment, useContext, useState } from 'react';
import { HelpCircle } from 'react-feather';
import { Row, Col, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H3, H5, H6, P } from '../../AbstractElements';
import FaqRightsidebae from './FaqRightside';
import FaqContext from '../../_helper/Faq/index';

const Questionss = () => {
  const { faq } = useContext(FaqContext);
  const [isActivity, setIsActivity] = useState([]);
  const para = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

  const handelChange = (e) => {
    let collapseCopy = [...isActivity];
    collapseCopy[e] = !collapseCopy[e];
    setIsActivity(collapseCopy);
  };

  return (
    <Fragment>
      <Col lg="12" >
        <div className="header-faq">
          <H3 attrH3={{ className: 'mb-0' }}>Quick Questions are answered</H3>
        </div>
        <Row className="row default-according style-1 faq-accordion" id="accordionoc">
          <Col xl="8 xl-60" lg="6" md="7" className='box-col-7' >
            {faq && faq.map((item, i) => {
              return (
                <Fragment key={i} >
                  <div className='faq-title'>
                    <H6>{item.subTitle}</H6>
                  </div>
                  {
                    faq[i].titless.map((item) => {
                      return (
                        <Card key={item.id}>
                          <CardHeader>
                            <H5 attrH5={{ className: 'mb-0' }}>
                              <Btn attrBtn={{ color: 'link ps-0', onClick: () => handelChange(item.id), datatoggle: 'collapse', datatarget: '#collapseicon14', ariaexpanded: 'true', ariacontrols: 'collapseicon14' }}><HelpCircle />{item.title}</Btn>
                            </H5>
                          </CardHeader>
                          <Collapse isOpen={isActivity[item.id]}>
                            <CardBody>
                              <P>{para}</P>
                            </CardBody>
                          </Collapse>
                        </Card>
                      );
                    })
                  }
                </Fragment>
              );
            })
            }
          </Col>
          <FaqRightsidebae />
        </Row>
      </Col >
    </Fragment >
  );
};
export default Questionss;
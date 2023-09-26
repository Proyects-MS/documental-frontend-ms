import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse } from 'reactstrap';
import { Btn, H5, LI, P, UL } from '../../../AbstractElements';
import { AboutMeData } from '../../../Data/users/index';

const AboutMeSidebar = () => {
  const [aboutme, setisAboutme] = useState(true);
  const toggleClick = () => {
    setisAboutme(!aboutme);
  };
  return (
    <Fragment>
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'p-0' }}>
              <Btn attrBtn={{
                className: 'btn btn-link', databstoggle: 'collapse', databstarget: '#collapseicon4'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon4', color: 'transperant', onClick: toggleClick
              }} >About Me</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={aboutme}>
            <CardBody className="post-about">
              <UL attrUL={{ as: 'ul', className: 'simple-list' }}>
                {AboutMeData.map((item) =>
                  <LI key={item.id}>
                    <div className="icon">{item.icon}</div>
                    <div>
                      <H5>{item.designation}</H5>
                      <P>{item.place}</P>
                    </div>
                  </LI>
                )}
              </UL>
              <div className="social-network theme-form"><span className="f-w-600">Social Networks</span>
                <Btn attrBtn={{ className: 'btn social-btn mb-2 text-center', color: 'fb' }}><i className="fa fa-facebook m-r-5"></i>Facebook</Btn >
                <Btn attrBtn={{ className: 'btn social-btn mb-2 text-center', color: 'twitter' }} ><i className="fa fa-twitter m-r-5"></i>Twitter</Btn>
                <Btn attrBtn={{ className: 'btn social-btn text-center', color: 'google' }} ><i className="fa fa-dribbble m-r-5"></i>Dribbble</Btn>
              </div>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Fragment >
  );
};
export default AboutMeSidebar;
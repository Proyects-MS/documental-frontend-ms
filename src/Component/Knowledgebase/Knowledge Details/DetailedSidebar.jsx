import React, { Fragment, useState } from 'react';
import { Card, CardHeader, Col, Collapse, Row } from 'reactstrap';
import { Btn, H5, LI, UL } from '../../../AbstractElements';
import { BackendDevelopment, Design, Development, FrontendDevelopment, InterfaceDesign, KnowledgeCategories, Knowledgefilter, UIDesign, UserExperience, UXDesign } from '../../../Constant';
import Sidebar2 from './Sidebar2';

const DetailedSidebar = () => {
  const [isProfile, setisProfile] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Fragment>
      <Col xl="3" className='xl-40'>
        <div className="job-sidebar md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>{Knowledgefilter}</a>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar custom-scrollbar ${IsOpen ? 'open' : ''}`}>
            <div className="default-according style-1 job-accordion" id="accordionoc">
              <Row>
                <Col xl="12">
                  <Card>
                    <CardHeader>
                      <H5 className="mb-0 p-0">
                        <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisProfile(!isProfile), datatoggle: 'collapse', datatarget: '#collapseicon5', ariaexpanded: 'true', ariacontrols: 'collapseicon5' }} >{KnowledgeCategories}</Btn>
                      </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile}>
                      <div className="categories">
                        <div className="learning-header"><span className="f-w-600">{Design}</span></div>
                        <UL>
                          <LI><a href="#javascript">{UIDesign} </a><span className="badge badge-primary pull-right">28</span></LI>
                          <LI><a href="#javascript">{UXDesign} </a><span className="badge badge-primary pull-right">35</span></LI>
                          <LI><a href="#javascript">{InterfaceDesign} </a><span className="badge badge-primary pull-right">17</span></LI>
                          <LI><a href="#javascript">{UserExperience}</a><span className="badge badge-primary pull-right">26</span></LI>
                        </UL>
                      </div>
                      <div className="categories pt-0">
                        <div className="learning-header"><span className="f-w-600">{Development}</span></div>
                        <UL>
                          <LI><a href="#javascript">{FrontendDevelopment}</a><span className="badge badge-primary pull-right">48</span></LI>
                          <LI><a href="#javascript">{BackendDevelopment}</a><span className="badge badge-primary pull-right">19</span></LI>
                        </UL>
                      </div>
                    </Collapse>
                  </Card>
                </Col>
                <Sidebar2 />
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default DetailedSidebar;
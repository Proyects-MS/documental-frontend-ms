import React, { Fragment, useState } from 'react';
import { Col, Row } from 'reactstrap';
import Filter from './Filter';
import Location from './Location';
import JobTitleClass from './JobTitle';
import Industry from './Industry';
import SkillClass from './Skill';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onHandelClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <Col xl="3 xl-40" className="box-col-5">
        <div className="job-sidebar md-sidebar">
          <a className="btn btn-primary job-toggle" href="#javascript" onClick={onHandelClick}>Job Filter</a>
          <div className={`job-left-aside custom-scrollbar ${isOpen ? 'open' : ''} `}>
            <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
              <Row>
                <Filter />
                <Location />
                <JobTitleClass />
                <Industry />
                <SkillClass />
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default Sidebar;
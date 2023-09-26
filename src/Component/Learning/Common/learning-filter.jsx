import React, { Fragment, useContext } from 'react';
import { Row, Col } from 'reactstrap';
import FindCourseClass from './FindCourse';
import CategoriesClass from './Categories';
import UpcomingClass from './UpcomingClass';
import LearningContext from '../../../_helper/Leatning';

const LearningFilter = () => {
  const { isOpen, setIsOpen } = useContext(LearningContext);
  const onClickeHandel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <Col xl="3 xl-40">
        <div className="job-sidebar md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={onClickeHandel}>Learning Filter</a>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
            <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
              <Row>
                <FindCourseClass />
                <CategoriesClass />
                <UpcomingClass />
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default LearningFilter;
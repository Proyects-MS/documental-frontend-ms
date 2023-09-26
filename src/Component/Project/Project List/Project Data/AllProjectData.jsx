import { H6, LI, P, UL, Image } from '../../../../AbstractElements';
import ProjectAppContext from '../../../../_helper/project-app';
import React, { Fragment, useContext } from 'react';
import { Col, Media, Progress, Row } from 'reactstrap';

const AllProjectData = () => {
  const { allProject } = useContext(ProjectAppContext);
  var images = require.context('../../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Row>
        {allProject.map((item) =>
          <Col md='6 col-xxl-4' key={item.id}>
            <div className="project-box">
              <span className={`badge ${item.badge === 'Done' ? 'badge-secondary' : 'badge-primary'}`}>{item.badge}</span>
              <H6>{item.title}</H6>
              <Media>
                <Image attrImage={{ className: 'img-20 me-2 rounded-circle', src: `${dynamicImage(item.img)}`, alt: '' }} />
                <Media body>
                  <P>{item.sites}</P>
                </Media>
              </Media>
              <P>{item.desc}</P>
              <Row className="details">
                <Col xs="6"><span>Issues </span></Col>
                <Col xs="6" className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>{item.issue}</Col>
                <Col xs="6"> <span>Resolved</span></Col>
                <Col xs="6" className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>{item.resolved}</Col>
                <Col xs="6"> <span>Comment</span></Col>
                <Col xs="6" className={item.badge === 'Done' ? 'font-secondary' : 'font-primary'}>{item.comment}</Col>
              </Row>
              <div className="customers">
                <UL attrUL={{ className: 'simple-list flex-row' }}>
                  <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ className: 'img-30 rounded-circle', src: `${dynamicImage(item.customers_img1)}`, alt: '' }} /></LI>
                  <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ className: 'img-30 rounded-circle', src: `${dynamicImage(item.customers_img2)}`, alt: '' }} /></LI>
                  <LI attrLI={{ className: 'd-inline-block' }}><Image attrImage={{ className: 'img-30 rounded-circle', src: `${dynamicImage(item.customers_img3)}`, alt: '' }} /></LI>
                  <LI attrLI={{ className: 'd-inline-block ms-2' }}>
                    <P attrPara={{ className: 'f-12' }}>{`+${item.like} More`}</P>
                  </LI>
                </UL>
              </div>
              <div className="project-status mt-4">
                <Media className="mb-0">
                  <P>{item.progress}% </P>
                  <Media body className="text-end"><span>Done</span></Media>
                </Media>
                {item.progress === '100' ?
                  <Progress className="sm-progress-bar" color="secondary" value={item.progress} style={{ height: '5px' }} />
                  :
                  <Progress className="sm-progress-bar" striped color="primary" value={item.progress} style={{ height: '5px' }} />
                }
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};
export default AllProjectData;
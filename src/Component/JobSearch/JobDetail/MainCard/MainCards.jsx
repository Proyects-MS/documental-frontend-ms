import React, { Fragment, useContext } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import JobSearchContext from '../../../../_helper/JobSearch';
import { H6, Image, P } from '../../../../AbstractElements';
import LastCard from './LastCard';

const MainDataCard = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
    <Fragment>
      {jobData.slice(0, 4).map((data, id) => {
        return (
          <Col xl="6 xl-100" key={id}>
            <Card>
              <div className="job-search">
                <CardBody>
                  <Media>
                    <Image attrImage={{
                      className: 'img-40 img-fluid m-r-20',
                      src: require(`../../../../assets/images/${data.logo}`), alt: ''
                    }} />
                    <Media body>
                      <H6 attrH6={{ className: 'f-w-600' }}>
                        <a href="#javascript">{data.job_name}</a>
                        {data.badgeType === 'primary' ? (
                          <span className="badge badge-primary pull-right">
                            {data.badgeValue}
                          </span>
                        ) : (
                          ''
                        )}
                      </H6>
                      <P>
                        {data.job_area} <span>{data.job_city}</span>
                        <span>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning"></i>
                          <i className="fa fa-star font-warning-o"></i>
                        </span>
                      </P>
                    </Media>
                  </Media>
                  <P>{data.Job_description}</P>
                </CardBody>
              </div>
            </Card>
          </Col>
        );
      })}
      <LastCard />
    </Fragment>
  );
};
export default MainDataCard;
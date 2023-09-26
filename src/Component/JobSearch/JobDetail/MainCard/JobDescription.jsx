import React, { Fragment } from 'react';
import { H6, P, UL, LI, Btn } from '../../../../AbstractElements';
import { JobDescriptions, Qualifications, Savethisjob, Share } from '../../../../Constant';
import { onlyDescription, QualificationsData } from '../../../../Data/Jobsearch';
import AgencyCard from './AgenctCard';
import PerksCard from './PerksCard';

const JobDescription = () => {
  return (
    <Fragment>
      <div className="job-description">
        <H6>{JobDescriptions}</H6>
        <P attrPara={{ className: 'text-start' }} >{onlyDescription}</P>
      </div>
      <div className="job-description">
        <H6>{Qualifications} </H6>
        <UL attrUL={{ className: 'simple-list' }}>
          {QualificationsData.map((item) => {
            return (
              <LI key={item.id}>{item.data}</LI>
            );
          })}
        </UL>
      </div>
      <AgencyCard />
      <PerksCard />
      <div className="job-description">
        <Btn attrBtn={{ className: 'btn me-2', color: 'primary', type: 'button' }}><span><i className="fa fa-check" ></i></span> {Savethisjob}</Btn>
        <Btn attrBtn={{ className: 'btn', color: 'primary', type: 'button' }} ><span><i className="fa fa-share-alt"></i></span> {Share}</Btn>
      </div>
    </Fragment>
  );
};

export default JobDescription;
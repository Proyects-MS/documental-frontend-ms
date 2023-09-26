import { H5, LI, UL, Image, Btn } from '../../../AbstractElements';
import { LatestPhotosData } from '../../../Data/users/index';
import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse } from 'reactstrap';

const PhotoSidebar = ({ isClass }) => {
  const [LatestPhoto, setisLatestPhoto] = useState(true);
  const toggleClick = () => {
    setisLatestPhoto(!LatestPhoto);
  };
  return (
    <Fragment>
      <Col xl="12" lg="6" sm="6" md="12" className={isClass ? 'xl-50 box-col-6' : ''}>
        <Card>
          <CardHeader >
            <H5 attrH5={{ className: 'p-0' }}>
              <Btn attrBtn={{
                className: 'btn btn-link', databstoggle: 'collapse', databstarget: '#collapseicon4'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon4', color: 'transperant', onClick: toggleClick
              }} >Latest Photo</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={LatestPhoto}>
            <CardBody className="card-body photos filter-cards-view">
              <UL attrUL={{ className: 'simple-list flex-row' }}>
                {LatestPhotosData.map((item) =>
                  <LI key={item.id}>
                    <div className="latest-post">
                      <Image attrImage={{ className: 'img-fluid', alt: '', src: `${(item.img)}` }} />
                    </div>
                  </LI>
                )}
              </UL>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Fragment >
  );
};
export default PhotoSidebar;
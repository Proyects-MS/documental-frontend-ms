import React, { Fragment, useCallback, useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, TabContent } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { Orgenization } from '../../../Constant';
import NavOrg from './OrganiceTab/NavOrg';
import TabOrg from './OrganiceTab/TabOrg';

const OrgenizationTab = () => {
  const [orgactiveTab, setOrgActiveTab] = useState('1');
  const callback = useCallback((tab) => {
    setOrgActiveTab(tab);
  }, []);

  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H5>{Orgenization}</H5><span className="f-14 pull-right mt-0">{'10 Contacts'}</span>
        </CardHeader>
        <CardBody className="p-0">
          <Row className="list-persons">
            <NavOrg callback={callback} />
            <Col xl="8" className='xl-50' md="7">
              <TabContent activeTab={orgactiveTab}>
                <TabOrg />
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default OrgenizationTab;
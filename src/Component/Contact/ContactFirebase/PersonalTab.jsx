import React, { Fragment, useCallback, useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, TabContent, TabPane } from 'reactstrap';
import { Personal } from '../../../Constant';
import { H5 } from '../../../AbstractElements';
import ListNewContact from './ListNewContact';
import ContactDetailsClass from './ContactDetail';
import UpdateUser from './UpdateUser';

const PersonalTab = ({ users }) => {

  const [selectedUser, setSelectedUser] = useState();
  const dynamictab = '0';
  const [editing, setEditing] = useState(false);
  const [editdata, setEditData] = useState({});
  const [editUrl, setEditUrl] = useState({});
  const [imgUpdate, setImgUpdate] = useState(false);

  const userCallback = useCallback((user) => {
    setSelectedUser(user);
    setImgUpdate(false);
  }, []);
  const userEditCallback = useCallback((edit, usersData, editurl, imgUpdate) => {
    setEditData(usersData);
    setSelectedUser(usersData);
    setEditing(edit);
    setEditUrl(editurl);
    setImgUpdate(imgUpdate);
  }, []);
  return (
    <Fragment>
      <Card>
        <CardHeader className="d-flex">
          <H5>{Personal}</H5><span className="f-14 pull-right mt-0">{`${users.length} Contacts`}</span>
        </CardHeader>
        <CardBody className="p-0">
          <Row className="list-persons" id="addcon">
            <ListNewContact users={users} userCallback={userCallback} />
            <Col xl="8" md="7" className=' xl-50'>
              {editing ?
                <UpdateUser imgUpdate={imgUpdate} editdata={editdata} editurl={editUrl} userEditCallback={userEditCallback} />
                :
                <TabContent activeTab={dynamictab}>
                  <TabPane tabId={dynamictab}>
                    <ContactDetailsClass imgUpdate={imgUpdate} editurl={editUrl} selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                  </TabPane>
                </TabContent>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default PersonalTab;
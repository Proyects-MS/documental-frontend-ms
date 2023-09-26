import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { MultiImageUpload } from '../../../Constant';
import { H5 } from '../../../AbstractElements';
import { ToastContainer } from 'react-toastify';

const Dropzone2 = (props) => {
  const { getUploadParams = '', handleChangeStatus = '', handleSubmit = '' } = props;
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{MultiImageUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <ToastContainer />
              <div className="dz-message needsclick">
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  accept="image/*"
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone2;
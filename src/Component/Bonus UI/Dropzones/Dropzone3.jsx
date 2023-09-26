import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { MultipleImageVideoAudioUpload } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const Dropzone3 = (props) => {
  const { getUploadParams = '', handleChangeStatus = '', handleSubmit = '' } = props;
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{MultipleImageVideoAudioUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="dz-message needsclick">
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  accept="image/*,audio/*,video/*"
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone3;
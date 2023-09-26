import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { CustomFileUpload } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const Dropzone5 = (props) => {
  const { getUploadParams = '', handleSubmit = '' } = props;
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{CustomFileUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="dz-message needsclick">
                <Dropzone
                  getUploadParams={getUploadParams}
                  onSubmit={handleSubmit}
                  inputContent="Drop Files (Custom Layout)"
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone5;
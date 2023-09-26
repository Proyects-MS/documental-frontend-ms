import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { SingleFileUpload } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const Dropzone1 = (props) => {
  const { getUploadParams = '', handleChangeStatus = '' } = props;
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{SingleFileUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="dz-message needsclick">
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  maxFiles={1}
                  multiple={false}
                  canCancel={false}
                  inputContent="Drop A File"
                  styles={{
                    dropzoneActive: { borderColor: 'green' },
                  }}
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone1;
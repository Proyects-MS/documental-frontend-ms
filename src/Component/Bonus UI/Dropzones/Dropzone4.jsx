import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { LimitationFileUpload } from '../../../Constant';
import { H5 } from '../../../AbstractElements';

const Dropzone4 = (props) => {
  const { handleChangeStatus = '', handleSubmit = '' } = props;
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{LimitationFileUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="dz-message needsclick">
                <Dropzone
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  maxFiles={3}
                  inputContent="Drop 3 Files"
                  inputWithFilesContent={files => `${3 - files.length} more`}
                  submitButtonDisabled={files => files.length < 3}
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone4;
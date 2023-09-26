import React, { Fragment } from 'react';
import { toast } from 'react-toastify';
import { Container, Row } from 'reactstrap';
import Dropzone1 from './Dropzone1';
import Dropzone2 from './Dropzone2';
import Dropzone3 from './Dropzone3';
import Dropzone4 from './Dropzone4';
import Dropzone5 from './Dropzone5';


const DropzonesContain = () => {
  const getUploadParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' };
  };
  const handleChangeStatus = ({ meta, file }, status) => {
  };
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove());
    toast.success('Dropzone successfully submitted !');
  };
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Dropzone1 getUploadParams={getUploadParams} handleChangeStatus={handleChangeStatus} />
          <Dropzone2 getUploadParams={getUploadParams} handleChangeStatus={handleChangeStatus} handleSubmit={handleSubmit} />
          <Dropzone3 getUploadParams={getUploadParams} handleChangeStatus={handleChangeStatus} handleSubmit={handleSubmit} />
          <Dropzone4 getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
          <Dropzone5 getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default DropzonesContain;
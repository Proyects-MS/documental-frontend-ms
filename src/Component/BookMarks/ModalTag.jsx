import React, { Fragment } from 'react';
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { Cancel, Save } from '../../Constant';

const ModalTag = (props) => {
  const { value = '', tagToggle = '' } = props;
  return (
    <Fragment>
      <Modal className="fade show modal-bookmark" size="lg"
        isOpen={value} toggle={tagToggle}>
        <ModalHeader className="modal-title">
          {'Create Tag'}
          <Btn attrBtn={{
            color: 'transprant', className: 'btn-close', onClick: tagToggle,
            type: 'button', databsdismiss: 'modal', arialabel: 'Close',
          }}></Btn>
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation">
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{'Tag Name'}</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup className="col-md-12 mb-0">
                <Label>{'Tag color'}</Label>
                <Input type="color" className="fill-color form-control" defaultValue="#563d7c" />
              </FormGroup>
            </div>
            <Btn attrBtn={{ color: 'secondary', onClick: tagToggle }}>
              {Save}
            </Btn>
            <Btn
              attrBtn={{ color: 'primary ms-1', onClick: tagToggle }}>
              {Cancel}
            </Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default ModalTag;
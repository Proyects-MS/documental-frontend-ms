import React, { Fragment, useState } from 'react';
import { Users } from 'react-feather';
import { Row, Col, Modal, ModalHeader, ModalBody, Label, FormGroup, Form, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { NewContacts, AddContacts, Name, Age, Mobile, Save, Cancel, LastName } from '../../../Constant';
import { createUser } from '../../../Services/Contact.Service';
import defaultuser from '../../../assets/images/user/user.png';
import { Btn } from '../../../AbstractElements';

const CreateContact = () => {
  const [modal, setModal] = useState(false);
  // eslint-disable-next-line
  const [addurl, setAddurl] = useState(defaultuser);
  const toggle = () => {
    setModal(!modal);
  };
  const { register, handleSubmit, formState: { errors } } = useForm();

  const AddContact = data => {
    if (data !== '') {
      createUser(data, addurl);
      setModal(false);
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Btn attrBtn={{ className: 'badge-light btn-block btn-mail w-100', color: 'primary', onClick: toggle }} >
        <Users className="me-2" />
        {NewContacts}
      </Btn>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader>{AddContacts}
          <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: toggle, type: 'button', databsdismiss: 'modal', arialabel: 'Close' }}></Btn>
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
            <Row>
              <FormGroup className="col-md-12">
                <Row>
                  <Col sm="6">
                    <Label>{Name}</Label>
                    <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                    <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                  </Col>
                  <Col sm="6">
                    <Label>{LastName}</Label>
                    <input className="form-control" name="surname" type="text" {...register('surname', { required: true })} />
                    <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Age}</Label>
                <input className="form-control" name="age" type="text" {...register('age', { required: true, pattern: /\d+/, min: 18, max: 70 })} />
                <span style={{ color: 'red' }}>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
              </FormGroup>
              <FormGroup className="col-md-12 ">
                <Label>{Mobile}</Label>
                <input className="form-control" name="mobile" type="number" {...register('mobile', { pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                <span style={{ color: 'red' }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
              </FormGroup>
            </Row>
            <Btn attrBtn={{ color: 'secondary', className: 'ms-1' }} >{Save}</Btn>&nbsp;&nbsp;
            <Btn attrBtn={{ color: 'primary', onClick: toggle }} >{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default CreateContact;
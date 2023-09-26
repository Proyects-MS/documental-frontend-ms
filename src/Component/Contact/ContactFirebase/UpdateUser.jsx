import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Label, FormGroup, Form } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { editUser } from '../../../Services/Contact.Service';
import { Name, Age, Mobile, Save, Cancel, LastName } from '../../../Constant';

const UpdateUser = ({ editdata, userEditCallback, editurl }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const editUrl = editurl;

  const UpdateContact = data => {
    if (data !== '') {
      editUser(data, editUrl, editdata.id);
      userEditCallback(false, data, editUrl, true);
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <div className="contact-editform ps-0 m-auto">
        <Form onSubmit={handleSubmit(UpdateContact)}>
          <div className="form-row">
            <FormGroup className="col-md-12">
              <Row>
                <Col sm="6">
                  <Label>{Name}</Label>
                  <input className="form-control" type="text" name="name" defaultValue={editdata.name} {...register('name', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                </Col>
                <Col sm="6">
                  <Label>{LastName}</Label>
                  <input className="form-control" type="text" name="surname" defaultValue={editdata.surname} {...register('surname', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup className="col-md-12">
              <Label>{Age}</Label>
              <input className="form-control" type="text" name="age" defaultValue={editdata.age} {...register('age', { required: true, pattern: /\d+/, min: 18, max: 70 })} />
              <span style={{ color: 'red' }}>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
            </FormGroup>
            <FormGroup className="col-md-12">
              <Label>{Mobile}</Label>
              <input className="form-control" type="text" name="mobile" defaultValue={editdata.mobile} {...register('mobile', { pattern: /\d+/, minlength: 0, maxlength: 9 })} />
              <span style={{ color: 'red' }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
            </FormGroup>
          </div>
          <Btn attrBtn={{ color: 'secondary', className: 'update-contact me-1' }} >{Save}</Btn>&nbsp;&nbsp;
          <Btn attrBtn={{ color: 'primary', onClick: () => userEditCallback(false) }} >{Cancel}</Btn>
        </Form>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
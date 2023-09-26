import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Button, Media, Card, InputGroup } from 'reactstrap';
import { Btn, H4, H3, Image, P } from '../../../AbstractElements';
import { API_URL } from '../../../Constant';
import { Link } from 'react-router-dom';
import user from '../../../assets/images/avtar/chat-user-2.png';
import SweetAlert from 'sweetalert2';
import { toast } from 'react-toastify';
import BarLoader from "react-spinners/BarLoader";
import axios from 'axios';

const EditMyProfile = ({data, toggleEditSignature, toggleEditAvatar}) => {

  const profile = localStorage.getItem('profileURL');
  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [saving, setSaving] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleRepeatPassword, setToggleRepeatPassword] = useState(false);

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar contraseña usuario!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((response) => {
        if (response.isConfirmed) {
            onSubmit(data);
        }
    });
  }

  const onSubmit = async (dat) => {
    setSaving(true);
    if (dat !== '') {
      if(dat.repeatPassword === dat.password){
        await axios({
          url: `${API_URL}user/Password/${data.id}`,
          method: 'PUT',
          headers: {
            'authorization': `Bearer ${token}`
          },
          data: {
            password: dat.password
          }
        }).then((response) => {
          toast.success(`Contraseña de usuario modificado correctamente`);
          reset();
          setSaving(false);
        }).catch((error) =>{
          switch (error.response.status) {
            case 0:
              toast.error("Error: No se pudo establecer conexión con el backend.");
              break;
          }
          setSaving(false);
        });
      }else{
        toast.error("Error: Las contraseñas no coinciden.");
        setSaving(false);
      }
    } else {
      setSaving(false);
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <Card>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <CardHeader className="pb-0">
          <div className="card-options">
            <a className="card-options-collapse" href="#javascript">
              <i className="fe fe-chevron-up"></i>
            </a>
            <a className="card-options-remove" href="#javascript">
              <i className="fe fe-x"></i>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <Row className="mb-2">
              <div className="profile-title">
                <Media>
                  <Image styles={{width: '70px', height: '70px'}} attrImage={{ className: 'img-70 rounded-circle', alt: '', src: profile !== null ? profile : user }} />
                  <Media body>
                    <H3 attrH3={{ className: 'mb-1 f-20 txt-primary' }}>{data.name}</H3>
                    <P>{data.role_id.name}</P>
                  </Media>
                </Media>
              </div>
          </Row>
          <Row className="profile-title mb-2">
              <Col sm="6" md="6">
                <FormGroup><Label className="form-label">Nombre</Label>
                  <input className="form-control" name='FirstName' type="text" value={data.name} disabled />
                </FormGroup>
              </Col>
              <Col sm="6" md="6">
                <FormGroup><Label className="form-label">Cédula</Label>
                  <input className="form-control" type="text" name='LastName' value={data.identification_card} disabled />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup><Label className="form-label">Correo</Label>
                  <input className="form-control" name='Address' type="text" value={data.email} disabled />
                </FormGroup>
              </Col>
              <Col md="12">
                <Button color='primary' style={{width: 225, marginLeft: 5}} onClick={toggleEditAvatar}><i className="fa fa-photo"></i> Cambiar Foto</Button>
              </Col>
          </Row>
          <H4 attrH4={{ className: 'card-title' }} style={{marginTop: 25}}>Cambiar contraseña</H4>
          <Row style={{marginTop: 20}}>
            <div className='col-md-6'>
                <Label className="col-form-label">Contraseña</Label>
                <InputGroup>
                  <input className="form-control" name='password' type={togglePassword ? 'text' : 'password'} {...register('password', { required: true })}/>
                  <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? '' : 'show'}></span></div>
                </InputGroup>
                <span style={{color: 'red'}}>{errors.password && '*Requerido'}</span>
                <div className="valid-feedback">{'Correcto'}</div>
            </div>
            <div className='col-md-6'>
                <Label className="col-form-label">Repetir Contraseña</Label>
                <InputGroup>
                  <input className="form-control" name='repeatPassword' type={toggleRepeatPassword ? 'text' : 'password'} {...register('repeatPassword', { required: true })}/>
                  <div className="show-hide" onClick={() => setToggleRepeatPassword(!toggleRepeatPassword)}><span className={toggleRepeatPassword ? '' : 'show'}></span></div>
                </InputGroup>
                <span style={{color: 'red'}}>{errors.repeatPassword && '*Requerido'}</span>
                <div className="valid-feedback">{'Correcto'}</div>
            </div>
          </Row>
        </CardBody>
        <CardFooter className="text-end">
          {
            !saving ? 
            <Button color='primary' style={{width: 225}}><i className="icofont icofont-diskette"></i> Cambiar contraseña</Button> : 
            <div className='btn btn-primary d-flex justify-content-center align-items-center' style={{height: 34, width: 225, float: 'right'}}>
              <BarLoader color={'white'} size={100}/>
            </div>
          }
          <Button color='primary' style={{width: 225, marginLeft: 5}} onClick={toggleEditSignature}><i className="fa fa-file"></i> Subir firma</Button>

          
        </CardFooter>
      </Form>
      </Card>
    </Fragment>
  );
};
export default EditMyProfile;
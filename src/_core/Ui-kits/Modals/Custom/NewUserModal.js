import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

const NewUserModal = ({ modal, toggle, changing }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [toggleSignaturePassword, setToggleSignaturePassword] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleRepeatPassword, setToggleRepeatPassword] = useState(false);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageError, setImageError] = useState('');
  const [signatureError, setSignatureError] = useState('');

  useEffect(() =>{
    getData();

    return(() => {
      setRoles([]);
    });
  }, []);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () =>{
    await axios({
      url: `${API_URL}roles`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then((response)=> {
      setRoles(response.data.data);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    })
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea agregar usuario!',
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

function validateIdentityCard(identity) {
  if (identity.length !== 10) {
    return false;
  }
  let province = identity.substring(0, 2);
  if (province < 1 || province > 24) {
    return false;
  }
  let digit = identity.substring(9, 10);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let number = identity.substring(i, i + 1);
    if (i % 2 === 0) {
      number *= 2;
      if (number > 9) {
        number -= 9;
      }
    }
    sum += parseInt(number);
  }
  sum += parseInt(digit);
  if (sum % 10 !== 0) {
    return false;
  }
  return true;
}

  const onSubmit = async (data) => {
    setSaving(true);
    if (data !== '') {
      if (validateIdentityCard(data.identification_card)) {
      if(data.repeat_password === data.password){
        const profile_photo_path = data.profile_photo_path[0];
        const signature = data.signature[0];

        let bodyFormDataProfile = new FormData();
        bodyFormDataProfile.append('name', data.name);
        bodyFormDataProfile.append('signature_password', data.signature_password);
        bodyFormDataProfile.append('identification_card', data.identification_card);
        bodyFormDataProfile.append('email', data.email);
        bodyFormDataProfile.append('password', data.password);
        bodyFormDataProfile.append('role_id', data.role);
        bodyFormDataProfile.append('status', "A");
        bodyFormDataProfile.append('position', data.position);
        bodyFormDataProfile.append('profile_photo_path', profile_photo_path);

        if(data.signature.length > 0){
          let bodyFormDataSignature = new FormData();
          bodyFormDataSignature.append('signature', signature);

          await axios({
            url: `${API_URL}firma`,
            method: 'POST',
            headers: {
              'authorization': `Bearer ${token}`
            },
            data: bodyFormDataSignature
          }).then(async (response) =>{
            bodyFormDataProfile.append('signature', response.data.filename);

            await axios({
              url: `${API_URL}user`,
              method: 'POST',
              headers: {
                'authorization': `Bearer ${token}`
              },
              data: bodyFormDataProfile
            }).then((response) => {
              changing();
              toast.success(`Usuario agregado correctamente`);
              reset();
              toggle();
              setSaving(false);
            }).catch((error) =>{
              switch (error.response.status) {
                case 0:
                  toast.error("Error: No se pudo establecer conexión con el backend.");
                  break;
                case 401:
                  if(error.response.data.data.email){
                    toast.error("Error: El correo ingresado ya existe.");
                  }else if(error.response.data.data.identification_card){
                    toast.error("Error: El número de cédula ingresado ya existe.");
                  }else if(error.response.data.data.password){
                    toast.error("Error: La contraseña debe tener al menos 8 caracteres.");
                  }
                  break;
              }
              setSaving(false);
            });
          }).catch((error) =>{
            switch (error.response.status) {
              case 0:
                toast.error("Error: No se pudo establecer conexión con el backend.");
                break;
            }
            setSaving(false);
          });
        }else{
          bodyFormDataProfile.append('signature', 'S/N');

            await axios({
              url: `${API_URL}user`,
              method: 'POST',
              headers: {
                'authorization': `Bearer ${token}`
              },
              data: bodyFormDataProfile
            }).then((response) => {
              changing();
              toast.success(`Usuario agregado correctamente`);
              reset();
              toggle();
              setSaving(false);
            }).catch((error) =>{
              switch (error.response.status) {
                case 0:
                  toast.error("Error: No se pudo establecer conexión con el backend.");
                  break;
                case 401:
                  if(error.response.data.data.email){
                    toast.error("Error: El correo ingresado ya existe.");
                  }else if(error.response.data.data.identification_card){
                    toast.error("Error: El número de cédula ingresado ya existe.");
                  }else if(error.response.data.data.password){
                    toast.error("Error: La contraseña debe tener al menos 8 caracteres.");
                  }
                  break;
              }
              setSaving(false);
            });
        }
      }else{
        toast.error("Error: Las contraseñas no coinciden.");
        setSaving(false);
      }
      }else{
        toast.error("Error: El número de cédula ingresado es incorrecto.");
        setSaving(false);
      }
    } else {
      setSaving(false);
      errors.showMessages();
    }
  };

  const handleCancel = () =>{
    reset();
    toggle();
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered size='lg'>
      <ModalHeader toggle={toggle}>{'Nuevo Usuario'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <ModalBody>
          {
            loading ? 
            <div className="email-right-aside">
              <div className="loader-box"><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
            </div>:
            <div className='row'>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Usuario (Nombre y Apellido)</Label>
                  <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                  <span>{errors.name && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Cédula</Label>
                  <input className="form-control" name="identification_card" type="text" {...register('identification_card', { required: true })} />
                  <span>{errors.identification_card && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Correo</Label>
                  <input className="form-control" name="email" type="email" {...register('email', { required: true })} />
                  <span>{errors.email && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Cargo</Label>
                  <input className="form-control" name="position" type="text" {...register('position', { required: true })} />
                  <span>{errors.position && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Rol</Label>
                  <select className="form-control" name="role" {...register('role', { required: true })}>
                    <option value={''}>Seleccione...</option>
                    {
                      roles.map((role) =>{
                        return(
                          <option key={role.id} value={role.id}>{role.name}</option>
                        );
                      })
                    }
                  </select>
                  <span style={{color: 'red'}}>{errors.role && '*Seleccione un rol '}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
  <FormGroup>
    <Label className="col-form-label">Foto de perfil</Label>
    <input
      className="form-control"
      name="profile_photo_path"
      type="file"
      {...register('profile_photo_path', {
        required: false,
        validate: {
          isImage: value => {
            if (value[0]) {
              const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
              if (!allowedTypes.includes(value[0].type)) {
                setImageError('Solo se permiten imágenes.');
                return false;
              }
            }
            return true;
          }
        }
      })}
    />
    <span className="text-danger">{imageError}</span>
  </FormGroup>
</div>
<div className='col-md-6'>
  <FormGroup>
    <Label className="col-form-label">Firma electrónica</Label>
    <input
      className="form-control"
      name="signature"
      type='file'
      {...register('signature', {
        required: false,
        validate: {
          isP12File: value => {
            if (value[0]) {
              const allowedTypes = ['application/x-pkcs12'];
              if (!allowedTypes.includes(value[0].type)) {
                setSignatureError('Solo se permiten archivos .p12');
                return false;
              }
            }
            return true;
          }
        }
      })}
    />
    {signatureError && <span className="text-danger">{signatureError}</span>}
    <div className="valid-feedback">Correcto</div>
  </FormGroup>
</div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Contraseña de la firma electrónica</Label>
                  <InputGroup>
                    <input className="form-control" name="signature_password" type={toggleSignaturePassword ? 'text' : 'password'} {...register('signature_password', { required: false })} />
                    <div className="show-hide" onClick={() => setToggleSignaturePassword(!toggleSignaturePassword)}><span className={toggleSignaturePassword ? '' : 'show'}></span></div>
                  </InputGroup>
                  <span style={{color: 'red'}}>{errors.signature_password && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Contraseña</Label>
                  <InputGroup>
                    <input className="form-control" name="password" type={togglePassword ? 'text' : 'password'} {...register('password', { required: true })} />
                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? '' : 'show'}></span></div>
                  </InputGroup>
                  <span style={{color: 'red'}}>{errors.password && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Repetir contraseña</Label>
                  <InputGroup>
                    <input className="form-control" name="repeat_password" type={toggleRepeatPassword ? 'text' : 'password'} {...register('repeat_password', { required: true })} />
                    <div className="show-hide" onClick={() => setToggleRepeatPassword(!toggleRepeatPassword)}><span className={toggleRepeatPassword ? '' : 'show'}></span></div>
                  </InputGroup>
                  <span style={{color: 'red'}}>{errors.repeat_password && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
            </div>
          } 
        </ModalBody>
        <ModalFooter>
          <div className='btn btn-danger' onClick={() => handleCancel()}><i className="icofont icofont-close-squared-alt"></i> Cancelar</div>
          {
            !saving ? 
            <Button color='primary'><i className="icofont icofont-diskette"></i> Guardar</Button> : 
            <div className='btn btn-primary d-flex justify-content-center align-items-center' style={{height: 34, width: 125}}>
              <BarLoader color={'white'} size={100}/>
            </div>
          }
          
        </ModalFooter>
      </Form>
    </Modal>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default NewUserModal;
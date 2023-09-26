import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

const EditUserModalPassword = ({ modal, toggle, item }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleRepeatPassword, setToggleRepeatPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

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

  const onSubmit = async (data) => {
    setSaving(true);
    if (data !== '') {
      if(data.repeat_password === data.password){
        await axios({
          url: `${API_URL}user/Password/${item.id}`,
          method: 'PUT',
          headers: {
            'authorization': `Bearer ${token}`
          },
          data: {
            password: data.password
          }
        }).then((response) => {
          toast.success(`Contraseña de usuario modificado correctamente`);
          reset();
          toggle();
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
  }

  const handleCancel = () =>{
    reset();
    toggle();
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered size='lg'>
      <ModalHeader toggle={toggle}>{'Editar Usuario'}</ModalHeader>
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

export default EditUserModalPassword;
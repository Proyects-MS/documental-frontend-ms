import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';

const NewRoleModal = ({ modal, toggle, data, changing }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea agregar rol!',
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
    setIsSaving(true);
    if (dat !== '') {
      await axios({
        url: `${API_URL}roles`,
        method: 'POST',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data:{
          name: dat.name,
          supervisor: dat.supervisor
        }
      }).then((response) => {
        changing();
        toast.success('Rol agregado correctamente');
        reset();
        toggle();
        setIsSaving(false);
      }).catch((error) =>{
        switch (error.response.status) {
          case 0:
            toast.error("Error: No se pudo establecer conexión con el backend.");
            break;
        }
        setIsSaving(false);
      });
    } else {
      errors.showMessages();
    }
  };

  const handleCancel =() =>{
    reset();
    toggle();
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered >
      <ModalHeader toggle={toggle}>{'Nuevo Rol'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <ModalBody>
            <div className='row'>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Nombre</Label>
                  <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                  <span>{errors.name && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Supervisado por</Label>
                  <select className="form-control" name="supervisor" {...register('supervisor', { required: true })}>
                    <option value={''}>Seleccione...</option>
                    {
                      data.map((role) =>{
                        return(
                          <option key={role.id} value={role.id}>{role.name}</option>
                        );
                      })
                    }
                  </select>
                  <span style={{color: 'red'}}>{errors.supervisor && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
            </div>
        </ModalBody>
        <ModalFooter>
          <div className='btn btn-danger' onClick={() => handleCancel()}><i className="icofont icofont-close-squared-alt"></i> Cancelar</div>
          {
            !isSaving ?
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

export default NewRoleModal;
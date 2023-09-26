import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

const EditUserModal = ({ modal, toggle, changing, item }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [modal]);

  useEffect(() =>{
    if(item){
        getData();
    }

    return(() => {
      setRoles([]);
    });
  }, [ modal ]);

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
        reset({
          name: item.name,
          signature_password: item.signature_password,
          identification_card: item.identification_card,
          email: item.email,
          role: item.role_id ? item.role_id.id : '',
          position: item.position
      });
      setRoles(response.data.data);
      setLoading(false);
    }).catch((error) => {
        setLoading(false);
    })
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar usuario!',
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
      await axios({
        url: `${API_URL}user/Data/${item.id}`,
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data: {
          name:data.name,
          identification_card: data.identification_card,
          email: data.email,
          role_id: data.role,
          position: data.position
        }
      }).then((response) => {
        changing();
        toast.success(`Usuario modificado correctamente`);
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
                  <Label className="col-form-label">Usuario (Nombre y Apellido)</Label>
                  <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                  <span>{errors.name && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Cédula</Label>
                  <input className="form-control" name="identification_card" type="text" {...register('identification_card', { required: false })} disabled />
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
                  <span style={{color: 'red'}}>{errors.role && '*Requerido'}</span>
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

export default EditUserModal;
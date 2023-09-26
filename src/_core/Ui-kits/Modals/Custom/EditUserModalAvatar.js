import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

const EditUserModalAvatar = ({ modal, toggle, item }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [imageError, setImageError] = useState('');


  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar foto de perfil usuario!',
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
      const profile_photo_path = data.profile_photo_path[0];

      let bodyFormDataProfile = new FormData();
      bodyFormDataProfile.append('profile_photo_path', profile_photo_path);

      await axios({
          url: `${API_URL}user/Photo/${item.id}`,
          method: 'POST',
          headers: {
            'authorization': `Bearer ${token}`
          },
          data: bodyFormDataProfile
      }).then((response) => {
          toast.success(`Foto de perfil modificada correctamente `);
          toast.success(`El cambio se vera reflejado en su proxima sesión `);
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
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Foto de perfil</Label>
                  <input className="form-control" name="profile_photo_path" type="file" {...register('profile_photo_path', { required: true ,
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
                  })}/>
                    <span className="text-danger">{imageError}</span>
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

export default EditUserModalAvatar;
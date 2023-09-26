import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';

const EditUserModalSignature = ({ modal, toggle, changing, item }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [toggleSignaturePassword, setToggleSignaturePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [signatureError, setSignatureError] = useState('');


  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar firma electrónica!',
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
        const signature = data.signature[0];

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
          await axios({
            url: `${API_URL}user/Signature/${item.id}`,
            method: 'PUT',
            headers: {
              'authorization': `Bearer ${token}`
            },
            data: {
              signature: response.data.filename,
              signature_password: data.signature_password
            }
          }).then((response) => {
            toast.success(`Firma electrónica modificada correctamente`);
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
                  <Label className="col-form-label">Firma electrónica</Label>
                  <input className="form-control" name="signature" type='file' {...register('signature', { required: false })} />
                  <span>{errors.signature && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Contraseña de la firma electrónica</Label>
                  <InputGroup>
                    <input className="form-control" name="signature_password" type={toggleSignaturePassword ? 'text' : 'password'} {...register('signature_password', { required: false,
                    validate: {
                      isP12File: value => {
                        if (value[0]) {
                          const fileExtension = value[0].name.split('.').pop().toLowerCase();
                          if (fileExtension !== 'p12') {
                            setSignatureError('Solo se permiten archivos con extensión .p12');
                            return false;
                          }
                        }
                        return true;
                      }
                    }
                    })} />
                    <div className="show-hide" onClick={() => setToggleSignaturePassword(!toggleSignaturePassword)}><span className={toggleSignaturePassword ? '' : 'show'}></span></div>
                  </InputGroup>
                   <span className="text-danger">{signatureError}</span>
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

export default EditUserModalSignature;
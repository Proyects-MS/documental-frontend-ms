import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';
import { Spinner } from '../../../../AbstractElements';

const EditCategoryModal = ({ modal, toggle, changing, item }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    if(item){
      reset({
        name: item.name
      });
      
      setLoading(false);
    }
  }, [ item ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar categoría de archivos!',
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
        url: `${API_URL}categories/${item.id}`,
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data: {
          name: dat.name
        }
      }).then((response) =>{
        changing();
        toast.success(`Categoría de archivos modificado correctamente`);
        reset();
        toggle();
        setIsSaving(false);
      }).catch((error) =>{
        console.log(error);
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
      <ModalHeader toggle={toggle}>{'Modificar Categoría de Archivos'}</ModalHeader>
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
                    <Label className="col-form-label">Nombre</Label>
                    <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                    <span>{errors.name && '*Requerido'}</span>
                    <div className="valid-feedback">{'Correcto'}</div>
                  </FormGroup>
                </div>
              </div>
            }
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

export default EditCategoryModal;
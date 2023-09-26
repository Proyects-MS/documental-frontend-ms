import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';

const NewEmailModal = ({ modal, toggle, receptor }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { currentUser } = useSelector((data) => data.authUser);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea enviar notificación!',
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
    
    await axios({
        url: `${API_URL}SendMensaje`,
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`
        },
        data: {
            notificado: receptor.task_id.user_asig_id.id,
            subject: dat.subject,
            message: `${currentUser.name} te ha enviado la siguiente notificación: ${dat.message} || Tarea: ${receptor.task_id.id} - ${receptor.task_id.name}, Proceso: ${receptor.process_id.id} - ${receptor.process_id.name} ||`
        }
    }).then((response) => {
        setIsSaving(false);
        reset();
        toggle();
        toast.success('Notificación enviada correctamente');
    }).catch((error) => {
        toast.error('Correo del receptor no válido');
    })
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
      <ModalHeader toggle={toggle}>{'Enviar notificación'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <ModalBody>
            {
                <div className='row'>
                    <div className='col-md-12'>
                        <FormGroup>
                            <Label className="col-form-label">Asunto</Label>
                            <input className="form-control" name="subject" type="text" {...register('subject', { required: true })} />
                            <span>{errors.subject && '*Requerido'}</span>
                            <div className="valid-feedback">{'Correcto'}</div>
                        </FormGroup>
                    </div>
                    <div className='col-md-12'>
                        <FormGroup>
                            <Label className="col-form-label">Mensaje</Label>
                            <textarea className="form-control" name="message" type="text" {...register('message', { required: true })} ></textarea>
                            <span>{errors.message && '*Requerido'}</span>
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
            <Button color='primary'><i className="icofont icofont-diskette"></i> Enviar</Button> :
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

export default NewEmailModal;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import { Spinner } from '../../../../AbstractElements';

const ReplaceFileModal = ({ modal, toggle, changing }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { currentUser } = useSelector((data) => data.authUser);
  const id = localStorage.getItem('selectedFile');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);


  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Remplazar archivo!',
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
      const now = new Date();
      const day = ("0" + now.getDate()).slice(-2);
      const month = ("0" + (now.getMonth() + 1)).slice(-2); 
      const hour = ("0" + now.getHours()).slice(-2);
      const minutes = ("0" + now.getMinutes()).slice(-2);
      const seconds = ("0" + now.getSeconds()).slice(-2);
      const todayTask = (day)+"-"+(month)+"-"+now.getFullYear()+" "+hour+":"+minutes+":"+seconds;

      let json = {
        name: dat.file[0].name.split(`.${dat.file[0].name.split('.')[dat.file[0].name.split('.').length - 1]}`)[0],
        ext_file: dat.file[0].name.split('.')[dat.file[0].name.split('.').length - 1],
        type: dat.file[0].type,
        peso: parseInt(dat.file[0].size / 1024),
        last_updated_user: currentUser.id
      }

      let bodyFormData = new FormData();
      bodyFormData.append('file', dat.file[0]);

      await axios({
        url: `${API_URL}ftp`,
        method: 'POST',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data: bodyFormData
      }).then(async (response) => {
        json = {...json, url: response.data.filename};

        await axios({
            url: `${API_URL}files/${id}`,
            method: 'PUT',
            headers: {
              'authorization': `Bearer ${token}`
            },
            data: json
        }).then(async (fileResponse) => {
            await axios({
                url: `${API_URL}HistoryFiles`,
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                data: {
                    description: `${currentUser.name} remplazó el archivo`,
                    file_id: id,
                    url: response.data.filename,
                    date: todayTask,
                    reason: dat.reason
                }
            }).then((response) => {
                toast.success('Archivo agregado correctamente');
                changing();
                reset();
                toggle();
                setIsSaving(false);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
      }).catch((error) => {
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
    <Modal isOpen={modal} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>{'Remplazar Archivo'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <ModalBody>
          {
            <div className='row'>
                <div className='col-md-12'>
                  <FormGroup>
                    <input className="form-control" name="file" type="file" {...register('file', { required: true })} />
                    <span style={{color: 'red'}}>{errors.file && '*Requerido'}</span>
                    <div className="valid-feedback">{'Correcto'}</div>
                  </FormGroup>
                </div>
                <div className='col-md-12'>
                  <FormGroup>
                    <Label>Motivo</Label>
                    <textarea className="form-control" name="reason" {...register('reason', { required: true })} ></textarea>
                    <span style={{color: 'red'}}>{errors.reason && '*Requerido'}</span>
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

export default ReplaceFileModal;
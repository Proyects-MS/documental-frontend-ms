import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';
import { Spinner } from '../../../../AbstractElements';

const EditTypeSubprocessModal = ({ modal, toggle, changing, item }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [TypeSubprocess,setTypeSubprocess] = useState([]);
  const token = localStorage.getItem('token');


  useEffect(() => {

    setLoading(true);
  }, [modal]);

  useEffect(() =>{
    if(item){
        getData();
    }

    return(() => {
      setTypeSubprocess([]);
    });
  }, [ modal ]);
//   FUNCTIONS
  const getData = async () =>{
    await axios({
      url: `${API_URL}processtype`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then((response)=> {
    console.log(response.data.data);
    reset({
      name: item.name,
     })
      setTypeSubprocess(response.data.data);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    })
  }
  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar el Proceso!',
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
    setIsSaving(true);
    if (data !== '') {
      await axios({
        url: `${API_URL}processtype/${item.id}`,
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data: {
          name: data.name,
          id_processtype: data.id_processtype
        }
      }).then((response) =>{
        changing();
        toast.success(`Proceso modificado correctamente`);
        reset();
        toggle();
        setIsSaving(false);
      }).catch((error) =>{
        console.log(error);
      });
    } else {
      errors.showMessages();
    } 
    console.log(data.name);
    console.log(data.processtype);
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
      <ModalHeader toggle={toggle}>{'Modificar Proceso'}</ModalHeader>
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
              </div>
              <div className='col-md-12'>
  
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

export default EditTypeSubprocessModal;

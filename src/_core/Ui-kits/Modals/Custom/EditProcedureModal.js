import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';
import { Spinner } from '../../../../AbstractElements';

const EditProcedureModal = ({ modal, toggle, changing, item, data }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [TypeContration, setTypeContration] = useState([]);

  useEffect(() => {
    setLoading(true);
  }, [modal]);

  useEffect(() => {
    if (item) {
      getData();
    }

    return (() => {
      setTypeContration([]);
    });
  }, [modal]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS
  const getData = async () => {
    await axios({
      url: `${API_URL}hiring`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data.data);
      reset({
        name: item.name,
        TypeContration: item.id_hiring ? item.id_hiring.id : ''
      })
      setTypeContration(response.data.data);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    })
  }
  const showAlert = (data) => {
    SweetAlert.fire({
      title: 'Seguro?',
      text: 'Desea modificar el Procedimiento!',
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
        url: `${API_URL}procedure/${item.id}`,
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data: {
          name: data.name,
          id_hiring: data.id_hiring
        }
      }).then((response) => {
        changing();
        toast.success(`Procedimiento modificado correctamente`);
        reset();
        toggle();
        setIsSaving(false);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      errors.showMessages();
    }
    console.log(data.name);
    console.log(data.id_hiring);
  };

  const handleCancel = () => {
    reset();
    toggle();
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered >
      <ModalHeader toggle={toggle}>{'Modificar Contratación'}</ModalHeader>
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
            <FormGroup>
              <Label className="col-form-label">Contratación</Label>
              <select
                className="form-control"
                name="id_hiring"
                id="id_hiring"
                {...register('id_hiring', { required: true })}
              >
                <option value={''}>Seleccione</option>
                {
                  TypeContration.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    );
                  })
                }
              </select>
              <span>{errors.id_hiring && '*Requerido'}</span>
              <div className="valid-feedback">{'Correcto'}</div>
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className='btn btn-danger' onClick={() => handleCancel()}><i className="icofont icofont-close-squared-alt"></i> Cancelar</div>
          {
            !isSaving ?
              <Button color='primary'><i className="icofont icofont-diskette"></i> Guardar</Button> :
              <div className='btn btn-primary d-flex justify-content-center align-items-center' style={{ height: 34, width: 125 }}>
                <BarLoader color={'white'} size={100} />
              </div>
          }
        </ModalFooter>
      </Form>
    </Modal>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default EditProcedureModal;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import SweetAlert from 'sweetalert2';

const NewRoleModal = ({ modal, toggle, data, changing, id }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);
  const [role, setRole] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [modal]);

  useEffect(() => {
    getRoles();

    return(() => {
      setRole({});
    })
  }, [id, modal]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getRoles = async () =>{
    setLoading(true);
    if(id !== 0){
        await axios({
            url: `${API_URL}roles/${id}`,
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setRole(response.data.data);
            reset(
                {
                    name: response.data.data.name,
                    supervisor: response.data.data.supervisor
                }
            );
            setLoading(false);
        }).catch((error) =>{
            console.log(error);
            setLoading(false);
        });
    }
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar rol!',
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
        url: `${API_URL}roles/${id}`,
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${token}`
        },
        data:{
          name: dat.name,
          supervisor: dat.supervisor
        }
      }).then((response) => {
        changing();
        toast.success('Rol modificado correctamente');
        toggle();
        setIsSaving(false);
      }).catch((error) =>{
        console.log(error);
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
      <ModalHeader toggle={toggle}>{'Editar Rol'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <ModalBody>
            {
                loading ?
                <div className="email-right-aside">
                    <div className="loader-box"><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
                </div> : 
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
                        <option >Seleccione...</option>
                        {
                            data.map((role) =>{
                            return(
                                <option key={role.id} value={role.id}>{role.name}</option>
                            );
                            })
                        }
                        </select>
                        <span style={{color: 'red'}}>{errors.name && '*Requerido'}</span>
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

export default NewRoleModal;
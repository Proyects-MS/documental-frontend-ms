import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';

const NewTaskModal = ({ modal, toggle, changing, proid, filid }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const { currentUser } = useSelector((data) => data.authUser);
  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [processes, setProcesses] = useState([]);
  const [users, setUsers] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [changeProcess, setChangeProcess] = useState(false);
  const [idSelected, setIdSelected] = useState('');
  const [fileId, setfileId] = useState(filid);

  useEffect(() =>{
    getData();

    return(() => {
      setProcesses([]);
      setUsers([]);
    });
  }, []);

  useEffect(() =>{
    getFiles();

    return(() => {
      setFiles([]);
    });
  }, [ changeProcess ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () =>{

    await axios({
        url: `${API_URL}processuser/${currentUser.id}`,
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then(async (response) =>{
      console.log('Datos de processuser:', response.data);
        await axios({
            url: `${API_URL}user`,
            method: 'GET',
            headers: { 
                'authorization': `Bearer ${token}`
            }

        }).then(async (usersResponse) =>{
            await axios({
                url: `${API_URL}roleSupervisor/${currentUser.role_id}`,
                method: 'GET',
                headers: { 
                    'authorization': `Bearer ${token}`
                }
            }).then((rolesResponse) => {
                let usrs = [];
                usersResponse.data.data.map((item) =>{
                    rolesResponse.data.map((role) => {
                      if(item.role_id){
                        if(item.role_id.id === role.id){
                            usrs = [...usrs, item];
                        }
                      }
                    });
                });

                setUsers(usrs);
                setProcesses(response.data.data);

                if(proid){
                  handleSelectProcess(proid);
                  reset({
                    process: proid
                  });
                }

                setLoading(false);
            }).catch((error) => {
              console.log(error);
            });
        }).catch((error) =>{
          console.log(error);
        });
    }).catch((error) =>{
        console.log(error);
    });
  }

  const handleSelectProcess = (id) => {
    setIdSelected(id);
    setChangeProcess(!changeProcess);
  }

  const getFiles = async () => {
    if(idSelected !== ''){
      await axios({
        url: `${API_URL}processfiles/${idSelected}`,
        method: 'GET',
        headers: { 
            'authorization': `Bearer ${token}`
        }
      }).then((response) => {
        setFiles(response.data.data);

        if(fileId){
          reset({
            process: proid,
            file: filid
          });
          setfileId(null);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea agregar tarea!',
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

    const now = new Date(data.date);
    const day = ("0" + (now.getDate())).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const hour = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const today = (day)+"-"+(month)+"-"+now.getFullYear()+" "+(hour)+":"+(minutes);

    if (data !== '') {
      await axios({
        url: `${API_URL}tasks`,
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`
        },
        data: {
          name: data.name,
          description: data.description,
          date: today,
          user_id: currentUser.id,
          user_asig_id: data.user,
          process_id: data.process,
          file_id: data.file,
          status: "A"
        }
      }).then(async (response) => {
        await axios({
          url: `${API_URL}history`,
          method: 'POST',
          headers: {
              'authorization': `Bearer ${token}`
          },
          data: {
              description: `${currentUser.name} asignó la tarea ${response.data.data.name} a ${response.data.data.user_asig_id.name}`,
              date: today,
              process_id: data.process,
              file_id: data.file !== null ? data.file: null,
              task_id: response.data.data.id
          }
        }).then((response) => {
          changing();
          toast.success(`Tarea agregada correctamente`);
          reset();
          toggle();
          setSaving(false);
          console.log('Datos guardados con éxito:', response.data);
        }).catch((error) => {
          console.log('Error al guardar los datos:', error);
        }); 
      }).catch((error) => {
        console.log('Error al guardar los datos:', error); 
      });
    } else {
      setSaving(false);
      errors.showMessages();
      console.log('Error: Los datos no se han guardado debido a errores en el formulario.');
    }
  };

  const handleCancel = () =>{
    reset();
    toggle();
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered size='lg'>
      <ModalHeader toggle={toggle}>{'Nueva Tarea'}</ModalHeader>
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
                  <Label className="col-form-label">Fecha</Label>
                  <input className="form-control" name="date" type="datetime-local" {...register('date', { required: true })} />
                  <span>{errors.date && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Nombre</Label>
                  <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                  <span>{errors.name && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Descripción</Label>
                  <textarea className="form-control" name="description" {...register('description', { required: true })} ></textarea>
                  <span style={{color: 'red'}}>{errors.description && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Asignado a:</Label>
                  <select className="form-control" name="user" {...register('user', { required: true })}>
                    <option value={''}>Seleccione...</option>
                    {
                      users.map((item) =>{
                        return(
                          <option key={item.id} value={item.id}>{item.name}</option>
                        );
                      })
                    }
                  </select>
                  <span style={{color: 'red'}}>{errors.user && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Proceso</Label>
                  <select className="form-control" name="process" {...register('process', { required: true })} onChange={(e) => handleSelectProcess(e.target.value)}>
                    <option value={''}>Seleccione...</option>
                    {
                      processes.map((item) =>{
                        return(
                          <option key={item.process_id.id} value={item.process_id.id}>{item.process_id.sequential} - {item.process_id.name}</option>
                        );
                      })
                    }
                  </select>
                  <span style={{color: 'red'}}>{errors.process && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Archivo</Label>
                  <select className="form-control" name="file" {...register('file', { required: false })}>
                    <option value={''}>Seleccione...</option>
                    {
                      files.map((item) =>{
                        return(
                          <option key={item.id} value={item.id}>{item.name}</option>
                        );
                      })
                    }
                  </select>
                  <span style={{color: 'red'}}>{errors.file && '*Requerido'}</span>
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

export default NewTaskModal;
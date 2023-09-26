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
import { useNavigate } from 'react-router';

const ViewTaskModal = ({ modal, toggle, id }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const history = useNavigate();

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
  const [fileSelected, setFileSelected] = useState('');
  const [data, setData] = useState({});

  useEffect(() =>{
    setLoading(true);
  }, [ modal ]);

  useEffect(() =>{
    if(id !== 0){   
      getData();
    }
    
    return(() => {
      setData({});
      setProcesses([]);
      setUsers([]);
    });
  }, [ modal ]);

  useEffect(() =>{
    if(idSelected !== ''){
      getFiles2(idSelected);
    }

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
            }).then(async (rolesResponse) => {
                await axios({
                    url: `${API_URL}tasks/${id}`,
                    method: 'GET',
                    headers: { 
                        'authorization': `Bearer ${token}`
                    }
                }).then((dataResponse) => {
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

                    const date = dataResponse.data.data.date.split('-');
                    const today = date[2].split(' ')[0] + '-' + date[1] + '-' + date[0] + ' ' + date[2].split(' ')[1];
                    
                    setIdSelected(dataResponse.data.data.process_id.id);
                    setFileSelected(dataResponse.data.data.file_id ? dataResponse.data.data.file_id.id : '');
                    setUsers(usrs);
                    setProcesses(response.data.data);
                    setData(dataResponse.data.data);
                    getFiles(dataResponse.data.data.process_id.id, today, dataResponse.data.data);
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
    
            });
        }).catch((error) =>{

        });
    }).catch((error) =>{
        console.log(error);
    });
  }

  const handleSelectProcess = (id) => {
    setIdSelected(id);
    setChangeProcess(!changeProcess);
  }

  const handleSelectFile= (id) => {
    setFileSelected(id);
  }

  const getFiles = (id, date, data) => {
    if(id !== ''){
      axios({
        url: `${API_URL}processfiles/${id}`,
        method: 'GET',
        headers: { 
            'authorization': `Bearer ${token}`
        }
      }).then((response) => {
        setFiles(response.data.data);

        if(loading){
          if(data.file_id){
            reset({
                name: data.name,
                description: data.description,
                user: data.user_asig_id.id,
                process: data.process_id.id,
                date: date,
                file: data.file_id ? data.file_id.id : ''
            });
  
            setLoading(false);
          }else{
            reset({
                name: data.name,
                description: data.description,
                user: data.user_asig_id.id,
                process: data.process_id.id,
                date: date
            });
  
            setLoading(false);
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }else{
        setFiles([]);
    }
  }

  const getFiles2 = (id) => {
    if(id !== ''){
      axios({
        url: `${API_URL}processfiles/${id}`,
        method: 'GET',
        headers: { 
            'authorization': `Bearer ${token}`
        }
      }).then((response) => {
        setFiles(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
    }else{
        setFiles([]);
    }
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea modificar tarea!',
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
    const day = ("0" + (now.getDate()+1)).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = (day)+"-"+(month)+"-"+now.getFullYear();

    if (data !== '') {
      await axios({
        url: `${API_URL}tasks/${id}`,
        method: 'PUT',
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
      }).then((response) => {
        toast.success(`Tarea modificada correctamente`);
        reset();
        toggle();
        setSaving(false);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      setSaving(false);
      errors.showMessages();
    }
  };

  const handleCancel = () =>{
    reset();
    toggle();
  }

  const handleGoProcess = () =>{
    localStorage.setItem('selectedProcess', idSelected);
    history('/proceso');
  }

  const handleGoFile = () =>{
    if(fileSelected !== '' ){
        localStorage.setItem('selectedProcess', idSelected);
        localStorage.setItem('selectedFile', fileSelected);
        history('/archivo');
    }
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered size='lg'>
      <ModalHeader toggle={toggle}>{'Tarea'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="">
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
                  <input disabled className="form-control" name="date" type="datetime-local" {...register('date', { required: true })} />
                  <span>{errors.date && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-6'>
                <FormGroup>
                  <Label className="col-form-label">Nombre</Label>
                  <input disabled className="form-control" name="name" type="text" {...register('name', { required: true })} />
                  <span>{errors.name && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Descripción</Label>
                  <textarea disabled className="form-control" name="description" {...register('description', { required: true })} ></textarea>
                  <span style={{color: 'red'}}>{errors.description && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                <FormGroup>
                  <Label className="col-form-label">Asignado a:</Label>
                  <select disabled className="form-control" name="user" {...register('user', { required: true })}>
                    <option value={''}>Seleccione...</option>
                    <option value={data.user_asig_id.id}>{data.user_asig_id.name}</option>
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
                  <Label className="col-form-label">Proceso <i className='fa fa-arrow-right' style={{cursor: 'pointer'}} onClick={() => handleGoProcess()}></i></Label>
                  <select disabled className="form-control" name="process" {...register('process', { required: true })} onChange={(e) => handleSelectProcess(e.target.value)}>
                    <option value={''}>Seleccione...</option>
                    {
                      processes.map((item) =>{
                        return(
                          <option key={item.process_id.id} value={item.process_id.id}>{item.process_id.id} - {item.process_id.name}</option>
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
                  <Label className="col-form-label">Archivo <i className='fa fa-arrow-right' style={{cursor: 'pointer'}} onClick={() => handleGoFile()}></i></Label>
                  <select disabled className="form-control" name="file" {...register('file', { required: false })} onChange={(e) => handleSelectFile(e.target.value)}>
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
        </ModalFooter>
      </Form>
    </Modal>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default ViewTaskModal;
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

const NewFileModal = ({ modal, toggle, changing }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { currentUser } = useSelector((data) => data.authUser);
  const id = localStorage.getItem('selectedProcess');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();

    return(() => {
      setCategories([]);
    });
  }, []);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () => {
    await axios({ 
      url: `${API_URL}categories`,
      method: 'GET',
      headers: {
        'authorization' : `Bearer ${token}`
      }
    }).then((response) => {
      setCategories(response.data.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
    });
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea agregar archivo(s)!',
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
      const today = (day)+"-"+(month)+"-"+now.getFullYear(); 
      const hour = ("0" + now.getHours()).slice(-2);
      const minutes = ("0" + now.getMinutes()).slice(-2);
      const seconds = ("0" + now.getSeconds()).slice(-2);
      const todayTask = (day)+"-"+(month)+"-"+now.getFullYear()+" "+hour+":"+minutes;
      
      let counter = 0;
      let total = dat.file.length;
      
      for (var i=0; i<dat.file.length; i++) {

        // console.table(dat.file[i]);
        let json = {
          name: dat.file[i].name.split(`.${dat.file[i].name.split('.')[dat.file[i].name.split('.').length - 1]}`)[0],
          date: todayTask,
          user_id: currentUser.id,
          process_id: id,
          ext_file: dat.file[i].name.split('.')[dat.file[i].name.split('.').length - 1],
          type: dat.file[i].type,
          peso: parseInt(dat.file[i].size / 1024),
          last_updated_user: currentUser.id,
          category_id: dat.category
        }

        let bodyFormData = new FormData();
        bodyFormData.append('file', dat.file[i]);

        await axios({
          url: `${API_URL}ftp`,
          method: 'POST',
          headers: {
            'authorization': `Bearer ${token}`
          },
          data: bodyFormData
        }).then(async (response) => {
          json = {...json, url: response.data.filename}
          
          await axios({
            url: `${API_URL}files`,
            method: 'POST',
            headers: {
              'authorization': `Bearer ${token}`
            },
            data: json
          }).then(async (dataResponse) => {
            await axios({
              url: `${API_URL}history`,
              method: 'POST',
              headers: {
                  'authorization': `Bearer ${token}`
              },
              data: {
                  description: `${currentUser.name} agregó el archivo ${dataResponse.data.data.name}.${dataResponse.data.data.ext_file}`,
                  date: todayTask,
                  process_id: id,
                  file_id: dataResponse.data.data.id,
              }
            }).then(async (historyResponse) => {
              await axios({
                url: `${API_URL}HistoryFiles`,
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                data: {
                    description: `${currentUser.name} agregó el archivo`,
                    file_id: dataResponse.data.data.id,
                    url: response.data.filename,
                    date: todayTask
                }
              }).then((response) => {
                counter = counter + 1;
              }).catch((error) => {
                console.log(error);
              });
            }).catch((error) => {
              console.log(error);
            });
          }).catch((error) => {
            console.log(error);
          });
        }).catch((error) => {
          console.log(error);
        });
      }

      changing();

      if(counter === total){
        toast.success('Archivo(s) agregado correctamente');
      }else{
        toast.error('Uno o mas archivos no se pudieron agregar, intente nuevamente');
      }

      reset();
      toggle();
      setIsSaving(false);
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
      <ModalHeader toggle={toggle}>{'Nuevo Archivo(s)'}</ModalHeader>
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
                    <input className="form-control" name="file" type="file" multiple {...register('file', { required: true })} />
                    <span style={{color: 'red'}}>{errors.file && '*Requerido'}</span>
                    <div className="valid-feedback">{'Correcto'}</div>
                  </FormGroup>
                </div>
                <div className='col-md-12'>
                  <FormGroup>
                    <Label className="col-form-label">Categoría</Label>
                    <select className="form-control" name="category" {...register('category', { required: true })}>
                      <option value={''}>Seleccione...</option>
                        {
                          categories.map((item) =>{
                            return(
                              <option key={item.id} value={item.id}>{item.name}</option>
                            );
                          })
                        }
                    </select>
                    <span style={{color: 'red'}}>{errors.category && '*Requerido'}</span>
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

export default NewFileModal;
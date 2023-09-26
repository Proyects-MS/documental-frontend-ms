import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import BarLoader from "react-spinners/BarLoader";
import { Image } from '../../../../AbstractElements';
import guias from '../../../../assets/images/guia2.png';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';
import axios from 'axios';
import { API_URL, FTP_FOLDER, SIGNATURES_LOCATION } from '../../../../Constant';
import { useSelector } from 'react-redux';

const SignDocumentModal = ({ modal, toggle, file, document, changing }) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const { currentUser } = useSelector((data) => data.authUser);
  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [saving, setSaving] = useState(false);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Firmar documento!',
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
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2); 
    const hour = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);
    const todayTask = (day)+"-"+(month)+"-"+now.getFullYear()+" "+hour+":"+minutes;
	

    setSaving(true);
    if (dat !== '') {

      await axios({
        url: `${API_URL}getfileftp/${document.url}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        },
      }).then(async (response) => {
		  
        await axios({
          url: `${API_URL}firmarPDF`,
          method: 'POST',
          headers: {
            'authorization': `Bearer ${token}`
          },
          data: {
            documentopdf: `${FTP_FOLDER}temporal.pdf`,
            archivop12: `${SIGNATURES_LOCATION}${currentUser.signature}`,
            contrasena: currentUser.signature_password,
            pagina: dat.page,
            h: dat.h,
            v: dat.v,
            name: document.name,
            extension: document.ext_file
          }
        }).then(async (response) => {
          
          const newUrl = response.data;
  
          await axios({
            url: `${API_URL}updURL/${document.id}`,
            method: 'PUT',
            headers: {
              'authorization': `Bearer ${token}`
            },
            data: {
              url: newUrl
            }
          }).then(async (response) => {
            await axios({
              url: `${API_URL}HistoryFiles`,
              method: 'POST',
              headers: {
                  'authorization': `Bearer ${token}`
              },
              data: {
                  description: `${currentUser.name} firmó el archivo`,
                  file_id: document.id,
                  url: newUrl,
                  date: todayTask
              }
            }).then((response) => {
              setSaving(false);
              toast.success('Archivo firmado correctamente');
              toggle();
              reset();
              changing();
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
    } else {
      setSaving(false);
      errors.showMessages();
    }
  };

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Modal isOpen={modal} toggle={toggle} centered size='lg'>
      <ModalHeader toggle={toggle}>{'Firmar documento'}</ModalHeader>
      <Form className="theme-form mega-form needs-validation" noValidate="" onSubmit={handleSubmit(showAlert)}>
        <ModalBody>
          <div className='d-flex justify-content-center'>
            {
              file ? <iframe src={file} style={{width: '90%', height:600, position: 'absolute'}} frameBorder="0"></iframe> : <></>
            }
            <Image attrImage={{ className: 'img-fluid', src: guias, alt: '' }} styles={{height: 500, position: 'relative', marginTop: 58, marginLeft: -57}}/>
          </div>
          <Row className='mt-5'>
            <div className='col-md-4'>
              <FormGroup>
                  <Label className="col-form-label">Horizontal</Label>
                  <input className="form-control" name="h" type="number" {...register('h', { required: true })} />
                  <span>{errors.h && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
              </FormGroup>
            </div>
            <div className='col-md-4'>
              <FormGroup>
                  <Label className="col-form-label">Vertical</Label>
                  <input className="form-control" name="v" type="number" {...register('v', { required: true })} />
                  <span>{errors.v && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
              </FormGroup>
            </div>
            <div className='col-md-4'>
              <FormGroup>
                  <Label className="col-form-label">Página</Label>
                  <input className="form-control" name="page" type="number" {...register('page', { required: true })} />
                  <span>{errors.page && '*Requerido'}</span>
                  <div className="valid-feedback">{'Correcto'}</div>
              </FormGroup>
            </div>
          </Row>
        </ModalBody>
        <ModalFooter>
          <div className='btn btn-danger'><i className="icofont icofont-close-squared-alt"></i> Cancelar</div>
          {
            !saving ? 
            <Button color='primary'><i className="icofont icofont-diskette"></i> Guardar</Button>  :
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

export default SignDocumentModal;
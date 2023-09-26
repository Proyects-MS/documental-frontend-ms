import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner } from '../../../../AbstractElements';
import { API_URL } from '../../../../Constant';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';


const NewTypeSubprocessModel = ({ modal, toggle, changing, setChange }) => {
    const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [TypeSubprocess,setTypeSubprocess] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() =>{
    getData();

    return(() => {
      setTypeSubprocess([]);
    });
  }, []);
  const getData = async () =>{
    await axios({
      url: `${API_URL}processtype`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then((response)=> {
      setTypeSubprocess(response.data.data);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    })
  }

  const showAlert = (data) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea agregar el Tipo de Proceso!',
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
        let bodyFormDataProfile
        if (data !== '') {
            bodyFormDataProfile = new FormData();
            bodyFormDataProfile.append('name', data.name);
            bodyFormDataProfile.append('id_processtype', data.id_processtype);
        } else {
            setSaving(false);
            errors.showMessages();
            return
          }

    await axios({
        url: `${API_URL}processtype`,
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`
        },
        data: bodyFormDataProfile
    }).then((response) => {
        changing();
        toast.success('Tipo de Proceso agregado con éxito');
        reset();
        toggle();
        setSaving(false);
    }).catch((error) => {
        switch (error.response.status) {
            case 0:
              toast.error("Error: No se pudo establecer conexión con el backend.");
              break;
            case 500:
                toast.error("Error: Ocurrió un error en el backend.");
                break;
            case 401:
                toast.error("Error: No se pudo autenticar correctamente.");
                break;

    }
    setSaving(false);	
    });
    };
    const handleCancel = () =>{
        reset();
        toggle();
      }
      return (
        <Modal isOpen={modal} toggle={toggle} centered size='lg'>
            <ModalHeader toggle={toggle}>{'Agregar Tipo de Proceso'}</ModalHeader>
                <Form onSubmit={handleSubmit(showAlert)}>
                <ModalBody>
                    <FormGroup>
                        <Label for="name">Nombre del Tipo de Proceso</Label>
                        <InputGroup>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nombre"
                                {...register("name", { required: true })}
                            />
                        </InputGroup>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.name && 'Nombre es requerido'}
                        </span>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>

                <div className="btn btn-danger" onClick={() => handleCancel()}>
            <i className="icofont icofont-close-squared-alt"></i> Cancelar
          </div>

          <Button color="primary" type="submit" disabled={saving}>
  {saving ? (
    <BarLoader color={"#ffffff"} loading={saving} size={15} />
  ) : (
    <>
      <i className="icofont icofont-diskette" /> Guardar
    </>
  )}
</Button>

                    
                </ModalFooter>
            </Form>
        </Modal>
    );

};

export default NewTypeSubprocessModel;
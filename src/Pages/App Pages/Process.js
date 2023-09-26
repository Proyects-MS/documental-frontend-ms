import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, Col, Container, FormGroup, Row } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import { API_URL, PROFILES_SERVER } from '../../Constant';
import { Spinner, Image } from '../../AbstractElements';
import CKEditors from 'react-ckeditor-component';
import UserImg from '../../assets/images/avtar/chat-user-2.png';
import { toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';
import NewFileModal from '../../_core/Ui-kits/Modals/Custom/NewFileModal';
import SweetAlert from 'sweetalert2';
import { useNavigate } from 'react-router';
import NewTaskModal from '../../_core/Ui-kits/Modals/Custom/NewTaskModal';

const Process = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE

    const history = useNavigate();

    const { permissions } = useSelector((data) => data.authUser);
    const { currentUser } = useSelector((data) => data.authUser);
    //console.log(permissions)
    const token = localStorage.getItem('token'); 
    const id = localStorage.getItem('selectedProcess');
	const process_user = localStorage.getItem('userProcess');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data, setData] = useState({});
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState([]);
    const [comments, setComments] = useState([]);
    const [files, setFiles] = useState([]);
    const [involved, setInvolved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState('');
    const [change, setChange] = useState(true);
    const [commenting, setCommenting] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalTask, setModalTask] = useState(false);
    const [originalUser, setOriginalUser] = useState('0');
    const [originalStatus, setOriginalStatus] = useState({});
    const [remainTime, setRemainTime] = useState('');
    const [remainTime2, setRemainTime2] = useState('');
    const [popUpVisible, setPopUpVisible] = useState(true);

    
    const [textareaValue, setTextareaValue] = useState('');


    const handleSubmitComent = async () => {
        //event.preventDefault();
        //setCommenting(true);
        const now = new Date();
        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);
        const today = (day)+"-"+(month)+"-"+now.getFullYear();
        const hour = ("0" + now.getHours()).slice(-2);
        const minutes = ("0" + now.getMinutes()).slice(-2);
        const seconds = ("0" + now.getSeconds()).slice(-2);
        const todayTask = (day)+"-"+(month)+"-"+now.getFullYear()+" "+hour+":"+minutes;
        
        await axios({
            url: `${API_URL}comments`,
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`
            },
            data: {
                date: todayTask,
                comment: textareaValue ,
                user_id: currentUser.id,
                process_id: id
            }
        }).then(async (response) => {
            await axios({
                url: `${API_URL}history`,
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                data: {
                    description: `${currentUser.name} agregó un comentario: ${textareaValue}`,
                    date: todayTask,
                    process_id: id
                }
            }).then((response) => {
                changing();
                toast.success('Comentario agregado correctamente');
                setTextareaValue('');
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
      }

    

    useEffect(() => {
        let interval = setInterval(() => {
            if(data.ending){
                countDown();
            }
        }, 1000);

        return(() => {
            clearInterval(interval);
        })
    });

    useEffect(() => {
        let interval = setInterval(() => {
            if(data.last_assign_date){
                countDown2();
            }
        }, 1000);

        return(() => {
            clearInterval(interval);
        })
    });

    useEffect(() =>{
        if(permissions[9].is_allowed === 0){
          window.location.href = '/error';
        }
      }, []);

    useEffect(() =>{
        const element = document.getElementById('Procesos');
        element.classList.add('active');
    }, []);

    useEffect(() =>{
        getData();
        return () => {
            setData({});
            setUsers([]);
            setStatus([]);
            setComments([]);
            setFiles([]);
            setInvolved([]); 
        };
    }, [ id, change ]);

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS

    const toggle = () => {
        setModal(!modal);
    }

    const toggleTask = () => {
        setModalTask(!modalTask);
    }

    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setComment(newContent);
    };

    const changing = () => {
        setChange(!change);
        setLoading(true);
    }

    const changingWithoutLoading = () => {
        setChange(!change);
    }

    const getData =  () =>{
        const getProcess = axios.get(`${API_URL}process/${id}`, {headers: {'authorization': `Bearer ${token}`}});
        const getUser = axios.get(`${API_URL}userA`, {headers: {'authorization': `Bearer ${token}`}});
        const getStates = axios.get(`${API_URL}states`, {headers: {'authorization': `Bearer ${token}`}});
        const getComments = axios.get(`${API_URL}processcomments/${id}`, {headers: {'authorization': `Bearer ${token}`}});
        const getFiles = axios.get(`${API_URL}processfiles/${id}`, {headers: {'authorization': `Bearer ${token}`}});
        const getInvolved = axios.get(`${API_URL}processinvolved/${id}`, {headers: {'authorization': `Bearer ${token}`}});
        const getSupervisor = axios.get(`${API_URL}roleSupervisor/${currentUser.role_id}`, {headers: {'authorization': `Bearer ${token}`}});

        axios.all([
            getProcess,
            getUser,
            getStates,
            getComments,
            getFiles,
            getInvolved,
            getSupervisor
        ]).then(
            axios.spread((...data) => {
                setInvolved(data[5].data.data);
                setFiles(data[4].data.data);
                setComments(data[3].data.data);
                setStatus(data[2].data.data);
                let usrs = [];
                data[1].data.data.map((item) =>{
                    data[6].data.map((role) => {
                        if(item.role_id){
                            if(item.role_id.id === role.id){
                                if(item.status === 'A'){
                                    usrs = [...usrs, item];
                                }
                            }
                        }
                    })
                })

                setUsers(usrs);
                setData(data[0].data.data);
                setOriginalUser((data[0].data.data.user_asig_id.id).toString());
                setOriginalStatus((data[0].data.data.state_id));
                reset({
                    user: '0',
                    description: data[0].data.data.description,
                    state: data[0].data.data.state_id.id,
                    name: data[0].data.data.name
                });
                validations(data[5].data.data);
                setLoading(false);
                setCommenting(false);

                const endingDateString = data[0].data.data.ending.split('-');
                const endingDateFormatted = endingDateString[2].split(' ')[0] + '-' + endingDateString[1] + '-' + endingDateString[0] + ' ' + endingDateString[2].split(' ')[1];
                const initialDate = new Date();
                const endingDate = new Date(endingDateFormatted);


                let remainTime = (endingDate - initialDate + 1000) / 1000;
                let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
                let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
                let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
                let remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

                if(remainTime > 0){
                    setRemainTime(remainDays + ":" + remainHours + ":" + remainMinutes+':'+remainSeconds);
                }else{
                    setRemainTime('TIEMPO DE PROCESO AGOTADO');
                    toast.error('El proceso se encuentra retrasado');
                }

                const endingDateString2 = data[0].data.data.last_assign_date.split('-');
                const endingDateFormatted2 = endingDateString2[2].split(' ')[0] + '-' + endingDateString2[1] + '-' + endingDateString2[0] + ' ' + endingDateString2[2].split(' ')[1];
                const initialDate2 = new Date();
                const endingDate2 = new Date(endingDateFormatted2);


                // let remainTime2 = (initialDate2 - endingDate2 + 1000) / 1000;
                // let remainSeconds2 = ('0' + Math.floor(remainTime2 % 60)).slice(-2);
                // let remainMinutes2 = ('0' + Math.floor(remainTime2 / 60 % 60)).slice(-2);
                // let remainHours2 = ('0' + Math.floor(remainTime2 / 3600 % 24)).slice(-2);
                // let remainDays2 = ('0' + Math.floor(remainTime2 / (3600 * 24))).slice(-2);

                const remainTime2 = Math.abs(new Date(endingDate2) - initialDate2);
                //console.log(remainTime2)
                //console.log(remainTime);
                const remainDays2 = ('0' + Math.floor(remainTime2 / (1000 * 60 * 60 * 24))).slice(-3);
                const remainHours2 = ('0' + Math.floor((remainTime2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
                const remainMinutes2 = ('0' + Math.floor((remainTime2 % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
                const remainSeconds2 = ('0' + Math.floor((remainTime2 % (1000 * 60)) / 1000)).slice(-2);

                if(data[0].data.data.state_id.state !== 'Cerrado' && data[0].data.data.state_id.state !== 'Finalizado' && data[0].data.data.state_id.state !== 'Terminado' && data[0].data.data.state_id.state !== 'Archivado'){
                    if(remainTime2 > 0){
                        setRemainTime2(remainDays2 + ":" + remainHours2 + ":" + remainMinutes2+':'+ remainSeconds2);
                    }else{
                        setRemainTime2('00:00:00:00');
                    }
                }else{
                    setRemainTime2('00:00:00:00');
                }
            })
        ).catch((error) => {
            console.log(error);
        });
    }

    const countDown = () => {
        const endingDateString = data.ending.split('-');
        const endingDateFormatted = endingDateString[2].split(' ')[0] + '-' + endingDateString[1] + '-' + endingDateString[0] + ' ' + endingDateString[2].split(' ')[1];
        const initialDate = new Date();
        const endingDate = new Date(endingDateFormatted);


        // let remainTime = (endingDate - initialDate + 1000) / 1000;
        // let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
        // let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
        // let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
        // let remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);
        
        const remainTime = (endingDate - initialDate);
        //console.log(remainTime);
        const remainDays = ('0' + Math.floor(remainTime / (1000 * 60 * 60 * 24))).slice(-3);
        const remainHours = ('0' + Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        const remainMinutes = ('0' + Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        const remainSeconds = ('0' + Math.floor((remainTime % (1000 * 60)) / 1000)).slice(-2);
        

        if(remainTime > 0){
            setRemainTime(remainDays + ":" + remainHours + ":" + remainMinutes+':'+remainSeconds);
        }else{
            setRemainTime('TIEMPO DE PROCESO AGOTADO');
        }
    }

    const validations = (data) => {
        if(data.length > 0){
            let is_asigned = false;
            data.map((item) => {
                if(item.user_id.id === currentUser.id){
                    is_asigned = true;
                }
            });

            if(!is_asigned){
                window.location.href = '/error';
            }
        } 
    }

    const handleComment = async () => {
        setCommenting(true);
        const now = new Date();
        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);
        const today = (day)+"-"+(month)+"-"+now.getFullYear();
        const hour = ("0" + now.getHours()).slice(-2);
        const minutes = ("0" + now.getMinutes()).slice(-2);
        const seconds = ("0" + now.getSeconds()).slice(-2);
        const todayTask = (day)+"-"+(month)+"-"+now.getFullYear()+" "+hour+":"+minutes;
        
        await axios({
            url: `${API_URL}comments`,
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`
            },
            data: {
                date: todayTask,
                comment: comment,
                user_id: currentUser.id,
                process_id: id
            }
        }).then(async (response) => {
            await axios({
                url: `${API_URL}history`,
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                data: {
                    description: `${currentUser.name} agregó un comentario: ${comment.replace('<p>', '').replace('</p>', '')}`,
                    date: todayTask,
                    process_id: id
                }
            }).then((response) => {
                changing();
                toast.success('Comentario agregado correctamente');
                setComment('');
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    const showAlert = (data) =>{
        SweetAlert.fire({
            title: 'Seguro?',
            text: 'Guardar cambios(s)!',
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

    const showAlertDelete = () =>{
        SweetAlert.fire({
            title: 'Seguro?',
            text: 'Eliminar proceso!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((response) => {
          if (response.isConfirmed) {
            onDelete(data);
          }
        });
    }

    const onSubmit = async (dat) => {

        // Obtener la fecha
        const now = new Date();
        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);
        const today = (day)+"-"+(month)+"-"+now.getFullYear();
        const hour = ("0" + now.getHours()).slice(-2);
        const minutes = ("0" + now.getMinutes()).slice(-2);
        const seconds = ("0" + now.getSeconds()).slice(-2);
        const todayTask = (day)+"-"+(month)+"-"+now.getFullYear()+" "+hour+":"+minutes;

        // Guardar cambios
        await axios({
            url: `${API_URL}process/${id}`,
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`
            },
            data: {
                name: dat.name,
                user_asig_id: dat.user === '0' ? originalUser : dat.user,
                state_id: dat.state,
                description: dat.description,
                last_updated_user: currentUser.id
            }
        }).then(async (response) => {

            // Validar si hubo cambios en el usuario asignado
            if(parseInt(dat.user === '0' ? originalUser : dat.user) !== parseInt(data.user_asig_id.id)){
                // Guardar en el historial de asignados
                await axios({
                    url: `${API_URL}assignhistory`,
                    method: 'POST',
                    headers: {
                        'authorization': `Bearer ${token}`
                    },
                    data: {
                        user_id: dat.user,
                        date: today,
                        process_id: id
                    }
                }).then(async (assignResponse) => {
                    // Guardar modificacion en el historial
                    await axios({
                        url: `${API_URL}history`,
                        method: 'POST',
                        headers: {
                            'authorization': `Bearer ${token}`
                        },
                        data: {
                            description: `${currentUser.name} modificó el proceso ${response.data.data.name}`,
                            date: todayTask,
                            process_id: response.data.data.id
                        }
                    }).then(async (historyResponse) => {
                        // Valida si hay un cambio en el estado del proceso
                        if(parseInt(dat.state) !== originalStatus.id){
                            // Agregar en el historial el cambio de estado
                            await axios({
                                url: `${API_URL}history`,
                                method: 'POST',
                                headers: {
                                    'authorization': `Bearer ${token}`
                                },
                                data: {
                                    description: `${currentUser.name} cambió el estado del proceso de ${originalStatus.state} a ${response.data.data.state_id.state}`,
                                    date: todayTask,
                                    process_id: response.data.data.id
                                }
                            }).then((response) => {
                                axios({
                                    url: `${API_URL}process/LastDate/${id}`,
                                    method: 'PUT',
                                    headers: {
                                        'authorization': `Bearer ${token}`
                                    },
                                    data: {
                                        last_assign_date: todayTask
                                    }
                                }).then((response) => {
                                    changing();
                                    dat.user !== '0' ? assign(dat.user) : toast.success('Proceso modificado correctamente');
                                }).catch((error) => {
                                    console.log(error);
                                });
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            axios({
                                url: `${API_URL}process/LastDate/${id}`,
                                method: 'PUT',
                                headers: {
                                    'authorization': `Bearer ${token}`
                                },
                                data: {
                                    last_assign_date: todayTask
                                }
                            }).then((response) => {
                                changing();
                                dat.user !== '0' ? assign(dat.user) : toast.success('Proceso modificado correctamente');
                            }).catch((error) => {
                                console.log(error);
                            });
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }).catch((error) => {
                    console.log(error);
                });
            }else{
                // Agregar modificacion en el historial
                await axios({
                    url: `${API_URL}history`,
                    method: 'POST',
                    headers: {
                        'authorization': `Bearer ${token}`
                    },
                    data: {
                        description: `${currentUser.name} modifico el proceso ${response.data.data.name}`,
                        date: todayTask,
                        process_id: response.data.data.id
                    }
                }).then(async (historyResponse) => {
                    // Validar si existe cambio en el estado del proceso
                    if(parseInt(dat.state) !== originalStatus.id){
                        await axios({
                            url: `${API_URL}history`,
                            method: 'POST',
                            headers: {
                                'authorization': `Bearer ${token}`
                            },
                            data: {
                                description: `${currentUser.name} cambió el estado del proceso de ${originalStatus.state} a ${response.data.data.state_id.state}`,
                                date: todayTask,
                                process_id: response.data.data.id
                            }
                        }).then((response) => {
                            changing();
                            dat.user !== '0' ? assign(dat.user) : toast.success('Proceso modificado correctamente');
                        }).catch((error) => {
                            console.log(error);
                        });
                    }else{
                        changing();
                        dat.user !== '0' ? assign(dat.user) : toast.success('Proceso modificado correctamente');
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }

        }).catch((error) => {
            console.log(error);
        });
    }

    const onDelete = async (dat) => {
        await axios({
            url: `${API_URL}process/${id}`,
            method: 'DELETE',
            headers: { 
                'authorization': `Bearer ${token}`
            }
        }).then((response) => {
            toast.success('Proceso eliminado correctamente');
            history('/procesos');
        }).catch((error) => {
            console.log(error);
        })
    }

    const assign = async (user) => {
        let exists = false;

        involved.map((item) => {
            if(parseInt(item.user_id.id) === parseInt(user)){
                exists = true;
            }
        });

        if(!exists){
            await axios({
                url: `${API_URL}involved`,
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`
                },
                data: {
                    user_id: user,
                    process_id: id,
                    estado: 'A'
                }
            }).then((response) => {
                setChange(!change);
                toast.success('Proceso modificado correctamente');
            }).catch((error) => {
                console.log(error);
            });
        }else{
            setChange(!change);
            toast.success('Proceso modificado correctamente');
        }
    }

    const handleSelectFile = (id) => {
        localStorage.setItem('selectedFile', id);
        history('/archivo');
    }

    const handleHistory = () => {
        history('/historial');
    }

    const getSecuencial = (id) =>{
        if(id > 0 && id <= 9){
            return '00000000' + id;
        }
        if(id > 10 && id <= 99){
            return '0000000' + id;
        }
        if(id > 100 && id <= 999){
            return '000000' + id;
        }
        if(id > 1000 && id <= 9999){
            return '00000' + id;
        }
        if(id > 10000 && id <= 99999){
            return '0000' + id;
        }
        if(id > 100000 && id <= 999999){
            return '000' + id;
        }
        if(id > 1000000 && id <= 9999999){
            return '00' + id;
        }
        if(id > 10000000 && id <= 99999999){
            return '0' + id;
        }
        if(id > 100000000 ){
            return id;
        }
    }

    const showAlertDownload = () =>{
        SweetAlert.fire({
            title: 'Seguro?',
            text: 'Descargar archivos!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((response) => {
          if (response.isConfirmed) {
            handleDownload(data);
          }
        });
    }

    const handleDownload = () => {
        files.map((item) => {
            axios({
                url: `${API_URL}ftp/${item.url}`,
                method: 'GET',
                responseType: 'arraybuffer',
                headers: {
                    'authorization' : `Bearer ${token}`
                }
            }).then((fileResponse) => {
                const blob = new Blob([fileResponse.data]);
                const file = new File([blob], `${item.url}`);
                let a = document.createElement('a');
                a.href = URL.createObjectURL(file);
                a.download = item.url;
                a.click();
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    const countDown2 = () => {
        const endingDateString = data.last_assign_date.split('-');
        const endingDateFormatted = endingDateString[2].split(' ')[0] + '-' + endingDateString[1] + '-' + endingDateString[0] + ' ' + endingDateString[2].split(' ')[1];
        const initialDate = new Date();
        const endingDate = new Date(endingDateFormatted);


        let remainTime = (initialDate - endingDate + 1000) / 1000;
        let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
        let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
        let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
        let remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

        if(data.state_id.state !== 'Cerrado' && data.state_id.state !== 'Finalizado' && data.state_id.state !== 'Terminado' && data.state_id.state !== 'Archivado'){
            if(remainTime > 0){
                setRemainTime2(remainDays + ":" + remainHours + ":" + remainMinutes+':'+remainSeconds);
            }else{
                setRemainTime2('00:00:00:00');
            }
        }else{
            setRemainTime2('00:00:00:00');
        }
    }

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // VIEW

    if(loading){
        return(
          <Fragment>
           <div className="loader-box" style={{height: '90vh'}}><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
          </Fragment>
        );
    }

    return (
        <Fragment>
            <Breadcrumbs parent="Procesos" title='Proceso' />
            <Container fluid={true}>
                <div className="user-profile social-app-profile">
                    <Col sm={'12 box-col-12'}>
                        <Card>
                            <CardBody>
                                <div className='row'>
                                    <div className='col-sm-8'>
                                        <div>
                                            <input name='name' type='text' {...register('name', { required: true })} style={{fontSize: 24, border: 'none', color: 'gray', width: '100%'}}/>
                                            <span style={{color: 'red'}}>{errors.name && '*Requerido'}</span>
                                            <div className="valid-feedback">{'Correcto'}</div>
                                        </div>
                                    </div>
                                    <div className='col-sm-2'>
                                        {
                                            permissions[11].is_allowed === 1 &&
                                            <Button onClick={handleSubmit(showAlert)} color='primary' style={{width: '100%', margin: 0}} disabled={data.state_id.state === 'Finalizado' || data.state_id.state === 'Cerrado' || data.state_id.state === 'Terminado' || data.state_id.state === 'FINALIZADO' || data.state_id.state === 'TERMINADO' || data.state_id.state === 'CERRADO' ? true : false}><i className='icofont icofont-diskette'></i> Guardar</Button>
                                        }
                                    </div>
                                    <div className='col-sm-2'>
                                        {
                                            permissions[12].is_allowed === 1 &&
                                            <Button onClick={() => showAlertDelete()} color='danger' style={{width: '100%', margin: 0}} disabled={data.state_id.state === 'Finalizado' || data.state_id.state === 'Cerrado' || data.state_id.state === 'Terminado' || data.state_id.state === 'FINALIZADO' || data.state_id.state === 'TERMINADO' || data.state_id.state === 'CERRADO' ? true : false}><i className='fa fa-close'></i> Eliminar</Button>
                                        }
                                    </div>
                                    <div className='col-sm-12'>
                                        <hr style={{borderTop: `7px solid gray`, borderRadius: 50}} />
                                    </div>
                                    <div className='col-sm-2'>
                                        Asignado a: 
                                    </div>
                                    <div className='col-sm-3'>
                                        <div>
                                            <i className='fa fa-user'></i>
                                            {
                                                permissions[8].is_allowed === 1 ?
                                                <select name="user" {...register('user', { required: true })} style={{border: 'none', color: 'gray', width: '90%'}}>
                                                    <option value={''}>Seleccione...</option>
                                                    <option value={'0'} style={{display: 'none'}}>{data.user_asig_id.name}</option>
                                                    {
                                                        users.map((item) =>{
                                                            return(
                                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                            );
                                                        })
                                                    }
                                                </select>
                                                : `  ${data.user_asig_id.name}`
                                            }
                                            
                                            <span style={{color: 'red'}}>{errors.user && '*Requerido'}</span>
                                            <div className="valid-feedback">{'Correcto'}</div>
                                        </div>
                                    </div>
                                    <div className='col-sm-2'>
                                        Estado: 
                                    </div>
                                    <div className='col-sm-3'>
                                        <div>
                                            <i className="fa fa-circle f-12" style={{color: data.state_id.colour}}/>
                                            <select name="state" {...register('state', { required: true })} style={{border: 'none', color: 'gray', width: '90%'}}>
                                                <option value={''}>Seleccione...</option>
                                                {
                                                    status.map((item) =>{
                                                        return(
                                                            <option key={item.id} value={item.id}>{item.state}</option>
                                                        );
                                                    })
                                                }
                                            </select>
                                            <span style={{color: 'red'}}>{errors.state && '*Requerido'}</span>
                                            <div className="valid-feedback">{'Correcto'}</div>
                                        </div>
                                    </div>
                                    <div className='col-sm-2' style={{textAlign: 'right'}}>
                                        {/* <i onClick={() => handleHistory()} style={{fontSize: 18, cursor: 'pointer'}} className="fa fa-history"></i>   */}
                                        <span style={{color: 'gray', cursor: 'pointer'}} onClick={() => handleHistory()}><i className='fa fa-history'></i> Ver historial</span><br/>
                                        <span style={{color: 'gray', cursor: 'pointer'}} onClick={toggleTask}><i className='fa fa-plus'></i> Crear tarea</span><br/>
                                        <span style={{color: 'gray', cursor: 'pointer'}} onClick={() => showAlertDownload()}><i className='fa fa-download'></i> Descargar archivos</span>    
                                    </div>
                                    <div className='col-sm-12 mt-3' style={{color: 'gray', fontSize: 12}}>
                                        No. <span style={{color: 'black', fontWeight: 'bold'}}>{data.sequential}</span>
                                    </div>
                                    <div className='col-sm-12 mt-3' style={{color: 'gray', fontSize: 12}}>
                                        {data.last_updated_user ? `Actualizado por ${data.last_updated_user.name} : ${data.updated_at}` : ''} | 
                                        Prioridad: <span style={{color: data.priority === 'Alta' ? 'red' : data.priority === 'Media' ? 'yellow' : 'green'}}>{data.priority ? data.priority : 'Baja'}</span>
                                    </div>
                                    <div className='col-sm-12 mt-3' style={{color: 'gray', fontSize: 12}}>
                                        Tipo de proceso: <span style={{color: 'black', fontWeight: 'bold'}}>{data.procedures}</span>
                                    </div>
                                    <div className='col-sm-12 mt-3' style={{color: 'gray', fontSize: 12}}>
                                        Contratación: <span style={{color: 'black', fontWeight: 'bold'}}>{data.hiring}</span> | Procedimiento: <span style={{color: 'black', fontWeight: 'bold'}}>{data.procedures}</span>
                                    </div>
                                    <div className='col-sm-12 mt-3' style={{color: 'gray', fontSize: 12}}>
                                        Tiempo Estimado: <span>{data.time}</span> | Tiempo Restante: <span style={{fontWeight: 'bold', color: 'red'}}>{remainTime}</span>
                                    </div>
                                    <div className='col-12 mt-3'>
                                        <FormGroup>
                                            <h5>Descripción</h5>
                                            <hr style={{borderColor: 'gray', borderWidth: 1}}/>
                                            <textarea placeholder='Click para añadir una descripción' className="form-control" name="description" type="text" {...register('description', { required: true })} style={{border: 'none', color: 'grey', fontSize: 12, margin: -10}}/>
                                            <span>{errors.description && '*Requerido'}</span>
                                            <div className="valid-feedback">{'Correcto'}</div>
                                        </FormGroup>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Row>
                        <Col sm={'8 box-col-8'}>
                            <Card>
                                <CardBody>
                                    <div className='row'>
                                        <div className='col-sm-12 mb-3'>
                                            <h4>Comentarios</h4>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='row'>
                                                <div className='col-sm-1'>
                                                    <Image styles={{width: '30px', height: '30px'}} attrImage={{ className: 'rounded-circle', src: currentUser.profile_photo_path ? `${PROFILES_SERVER}${currentUser.profile_photo_path}` : UserImg, alt: '' }} />
                                                </div>
                                                <div className='col-sm-11'>
                                                    {/* <CKEditors 
                                                        content={comment}
                                                        events={{
                                                            'change': onChange
                                                        }}
                                                    /> */}
                                                    <textarea 
                                                        className='form-control'
                                                        placeholder='Escribe un comentario...'
                                                        value={textareaValue} onChange={e => setTextareaValue(e.target.value)}
                                                        rows={4}
                                                        cols={80}
                                                    />
                                                    <div className='mt-2' style={{textAlign: 'right'}}>
                                                        {
                                                            !commenting ?
                                                            permissions[13].is_allowed === 1 && 
                                                            <Button color='primary' style={{width: 150, margin: 0}} onClick={() => handleSubmitComent()} disabled={data.state_id.state === 'Finalizado' || data.state_id.state === 'Cerrado' || data.state_id.state === 'Terminado' || data.state_id.state === 'FINALIZADO' || data.state_id.state === 'TERMINADO' || data.state_id.state === 'CERRADO' ? true : false}><i className='icofont icofont-diskette'></i> Guardar</Button>: 
                                                            permissions[13].is_allowed === 1 &&
                                                            <div className='btn btn-primary d-flex justify-content-center align-items-center' style={{height: 34, width: 150, float: 'right'}}>
                                                              <BarLoader color={'white'} size={100}/>
                                                            </div>
                                                        }
                                                    </div>
                                                    {/* <textarea placeholder='Escriba un comentario....'></textarea> */}
                                                </div>
                                            </div>
                                            <hr style={{borderColor: 'gray', borderWidth: 1}} className='mt-3'/>
                                        </div>
                                        {
                                            comments.map((item) =>{
                                                return(
                                                    <div key={item.id} className='col-sm-12 mt-2'>
                                                        <div className='row'>
                                                            <div className='col-sm-1'>
                                                                <Image styles={{width: '30px', height: '30px'}} attrImage={{ className: 'rounded-circle', src: item.user_id.profile_photo_path ? `${PROFILES_SERVER}${item.user_id.profile_photo_path}` : UserImg, alt: '' }} />
                                                            </div>
                                                            <div className='col-sm-11 border' style={{borderRadius: 10, padding: 5}}>
                                                                <p style={{color: 'gray'}}>{`${item.user_id.name} comentó el ${item.date}`}</p>
                                                                <div style={{color: 'black', marginTop: -10}} dangerouslySetInnerHTML={{__html: item.comment}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </CardBody>   
                            </Card>                          
                        </Col>
                        <Col sm={'4 box-col-4'}>
                            <Card>
                                <CardBody>
                                    <div className='row'>
                                        <div className='col-sm-12 mb-3'>
                                            <h4>Archivos</h4>
                                        </div>
                                        <div className='col-sm-12'>
                                            {
                                                permissions[14].is_allowed === 1 && 
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <div className='btn btn-primary' onClick={data.state_id.state === 'Finalizado' || data.state_id.state === 'Cerrado' || data.state_id.state === 'Terminado' || data.state_id.state === 'FINALIZADO' || data.state_id.state === 'TERMINADO' || data.state_id.state === 'CERRADO' ? () => {} : toggle} style={{cursor: 'pointer'}}><i className='fa fa-plus' style={{color: 'white'}}></i> Agregar Archivo(s)</div>
                                                </div>
                                            }
                                            
                                            <hr style={{borderColor: 'gray', borderWidth: 1}} className='mt-3'/>
                                            {
                                                files.map((item) => {
                                                    return(
                                                        <div key={item.id} className='mb-3'>
                                                            <Image styles={{width: '20px', height: '20px', marginRight: 5}} attrImage={{ className: 'rounded-circle', src: item.user_id.profile_photo_path ? `${PROFILES_SERVER}${item.user_id.profile_photo_path}` : UserImg, alt: '' }} />
                                                            <span onClick={() => handleSelectFile(item.id)} style={{cursor: 'pointer'}}>{item.name}.{item.ext_file}</span><br/>
                                                            <span style={{color: 'gray', fontSize: 12}}>{`Agregado el ${item.date}`}</span>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </CardBody>   
                            </Card>                             
                        </Col>                          
                    </Row>
                </div>
            </Container>
            <NewFileModal modal={modal} toggle={toggle} changing={changing}/>
            <NewTaskModal modal={modalTask} toggle={toggleTask} changing={changing} proid={localStorage.getItem('selectedProcess')}/>
            <div style={{position: 'fixed', top: '65%', right: 30, border: '5px solid #0d6efd', height: 150, width: 380, backgroundColor: 'white', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, boxShadow: '5px 5px 10px black', display: popUpVisible ? 'block' : 'none'}} >
               <span onClick={() => setPopUpVisible(false)} style={{backgroundColor: '#0d6efd', paddingRight: 4, paddingLeft: 4, paddingTop: 1, paddingBottom: 1, float: 'right', borderRadius: 10, color: 'white', fontSize: 8, marginTop: 5, marginRight: 5, cursor: 'pointer'}}>x</span>
               <div style={{padding: 10, fontSize: 11, color: 'gray'}}>
                    <span style={{fontWeight: 'bold'}}>No: </span> {data.sequential} <br/>
                    <span style={{fontWeight: 'bold'}}>Proceso: </span> {data.name} <br/>
                    <span style={{fontWeight: 'bold'}}>Estado: </span> <span style={{color: data.state_id.colour}}>{data.state_id.state}</span> <br/>
					<span style={{fontWeight: 'bold'}}>Usuario: </span> <span>{data.user_asig_id.name}</span> <br/>
                    <span style={{fontWeight: 'bold'}}>Tiempo: </span><span style={{color: 'red'}}>{remainTime2}</span><br/>                  
               </div>                          
            </div>    
            <div style={{position: 'fixed', top: '65%', right: 10, border: '1px solid #0d6efd', height: 20, width: 30, backgroundColor: 'white', borderRadius: 15, boxShadow: '5px 5px 10px black', display: popUpVisible ? 'none' : 'block', textAlign: 'center'}} >
               <span onClick={() => setPopUpVisible(true)} style={{cursor: 'pointer', color: '#0d6efd', textAlign: 'center'}} className='fa fa-eye'></span>
            </div>        
        </Fragment>
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Process;
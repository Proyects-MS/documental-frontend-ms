import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Card, CardBody, Col, Row, Container, Button } from 'reactstrap';
import { Breadcrumbs, Spinner, Badges } from '../../AbstractElements';
import { API_URL } from '../../Constant';
import NewTaskModal from '../../_core/Ui-kits/Modals/Custom/NewTaskModal';
import SignDocumentModal from '../../_core/Ui-kits/Modals/Custom/SignDocumentModal';
import SweetAlert from 'sweetalert2';
import ReplaceFileModal from '../../_core/Ui-kits/Modals/Custom/ReplaceFileModal';

const Files = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE

    const history = useNavigate();

    const token = localStorage.getItem('token');
    const id = localStorage.getItem('selectedFile');
	const process_user = localStorage.getItem('userProcess');
    const { permissions } = useSelector((data) => data.authUser);
    const { currentUser } = useSelector((data) => data.authUser);

    const [data, setData] = useState({});
    const [file, setFile] = useState([]);
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalTask, setModalTask] = useState(false);
    const [modalReplace, setModalReplace] = useState(false);
    const [change, setChange] = useState(false);
    const [remainTime, setRemainTime] = useState('');
    const [popUpVisible, setPopUpVisible] = useState(true);

    useEffect(() => {
        if(data){
            let interval = setInterval(() => {
                if(data.process_id.last_assign_date){
                    countDown();
                }
            }, 1000);

            return(() => {
                clearInterval(interval);
            })
        }
    }, [data]);
    
    useEffect(() =>{
        const element = document.getElementById('Procesos');
        element.classList.add('active');
        return () => {
            setData({});
        };
    }, []);

    useEffect(() =>{
        getData();
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

    const toggleReplace = () => {
        setModalReplace(!modalReplace);
    }

    const changing = () => {
        setChange(!change);
    }

    const getData = async () => {
        await axios({
            url: `${API_URL}files/${id}`,
            method: 'GET',
            headers: {
                'authorization' : `Bearer ${token}`
            }
        }).then(async (response) => {
            await axios({
                url: `${API_URL}ftp/${response.data.data.url}`,
                method: 'GET',
                responseType: 'arraybuffer',
                headers: {
                    'authorization' : `Bearer ${token}`
                }
            }).then((fileResponse) => {
                const blob = new Blob([fileResponse.data]);
                const file = new File([blob], `${response.data.data.name}.${response.data.data.ext_file}`, {type: response.data.data.type, lastModified: Date.now()});
                setFile(URL.createObjectURL(file));
                setType(response.data.data.ext_file);
                setData(response.data.data);

                const endingDateString = response.data.data.process_id.last_assign_date.split('-');
                const endingDateFormatted = endingDateString[2].split(' ')[0] + '-' + endingDateString[1] + '-' + endingDateString[0] + ' ' + endingDateString[2].split(' ')[1];
                const initialDate = new Date();
                const endingDate = new Date(endingDateFormatted);


                let remainTime = (initialDate - endingDate + 1000) / 1000;
                let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
                let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
                let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
                let remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

                if(remainTime > 0){
                    setRemainTime(remainDays + ":" + remainHours + ":" + remainMinutes+':'+remainSeconds);
                }else{
                    setRemainTime('00:00:00:00');
                }

                if(response.data.data.process_id.state_id.state !== 'Cerrado' && response.data.data.process_id.state_id.state !== 'Finalizado' && response.data.data.process_id.state_id.state !== 'Terminado'){
                    if(remainTime > 0){
                        setRemainTime(remainDays + ":" + remainHours + ":" + remainMinutes+':'+remainSeconds);
                    }else{
                        setRemainTime('00:00:00:00');
                    }
                }else{
                    setRemainTime('00:00:00:00');
                }

                setLoading(false);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleBack = () => {
        history('/proceso');
    };

    const showAlertDelete = () =>{
        SweetAlert.fire({
            title: 'Seguro?',
            text: 'Eliminar archivo!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((response) => {
          if (response.isConfirmed) {
            handleDelete();
          }
        });
    }

    const handleDelete = async () => {
        await axios({
            url: `${API_URL}files/${id}`,
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => {
            history('/proceso');
            toast.success('Archivo eliminado correctamente');
        }).catch((error) => {
            console.log(error);
        });
    }

    const countDown = () => {
        const endingDateString = data.process_id.last_assign_date.split('-');
        const endingDateFormatted = endingDateString[2].split(' ')[0] + '-' + endingDateString[1] + '-' + endingDateString[0] + ' ' + endingDateString[2].split(' ')[1];
        const initialDate = new Date();
        const endingDate = new Date(endingDateFormatted);


        let remainTime = (initialDate - endingDate + 1000) / 1000;
        let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
        let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
        let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
        let remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

        if(data.process_id.state_id.state !== 'Cerrado' && data.process_id.state_id.state !== 'Finalizado' && data.process_id.state_id.state !== 'Terminado'){
            if(remainTime > 0){
                setRemainTime(remainDays + ":" + remainHours + ":" + remainMinutes+':'+remainSeconds);
            }else{
                setRemainTime('00:00:00:00');
            }
        }else{
            setRemainTime('00:00:00:00');
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
            <Breadcrumbs parent="Procesos" title='Archivo' />
            <Container fluid={true}>
                <div className="user-profile social-app-profile">
                    <Col sm={'12 box-col-12'}>
                        <Card>
                            <CardBody>
                                <div className='row'>
                                    <div className='col-sm-10'>
                                        <div className='d-flex align-items-center'>
                                            <div className='d-inline'>
                                                <i className='fa fa-file-text-o' style={{fontSize: 45, marginRight: 15}}></i>
                                            </div>
                                            <div className='d-inline' style={{verticalAlign: 'middle'}}>
                                                <span className='h2'> {data.name}.{data.ext_file}</span> 
                                                <p style={{color: 'gray'}}>Modificado por {data.last_updated_user.name} el {data.updated_at} | <Badges attrBadge={{ color: 'info' }} >{data.category_id.name}</Badges></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-2'>
                                        <Button onClick={() => handleBack()} color='primary' style={{width: '150px', margin: 0, float: 'right'}}><i className='fa fa-arrow-left'></i> Atrás</Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Row>
                        <Col sm={'8 box-col-8'}>
                            <Card>
                                <CardBody className={'d-flex align-items-center justify-content-center'}>
                                    {
                                        type === 'pdf' ? <iframe src={`${file}#view=fitH`} style={{width: '95%', height:550}} frameBorder="0"></iframe> :
                                        type === 'jpg' ||  type === 'png' ?
                                        <img src={file} style={{width: '90%', height: 480, objectFit: 'contain'}}/>:
                                        <p>No se puede previzualizar el documento</p>
                                    }
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={'4 box-col-4'}>
                            <Card>
                                <CardBody>
                                    <div className='row' style={{height: 550}}>
                                        <div className='col-sm-12 mb-3'>
                                            <h4>Acciones</h4>
                                        </div>
                                        <div className='col-sm-12'>
                                            <span style={{color: 'gray', cursor: 'pointer'}}><a href={file} download={`${data.name}.${data.ext_file}`}><i className='fa fa-download'></i> Descargar</a></span><br/>
                                            <span style={{color: 'gray', cursor: 'pointer'}} onClick={() => history('/historialarchivo')}><i className='fa fa-history'></i> Ver historial</span><br/>
                                            <hr style={{borderTop: `1px solid gray`}} />
                                            <span style={{color: 'gray', cursor: 'pointer'}} onClick={data.process_id.state_id.state === 'Finalizado' || data.process_id.state_id.state === 'Cerrado' || data.process_id.state_id.state === 'Terminado' ? () => {} : toggleTask}><i className='fa fa-plus'></i> Crear tarea</span><br/>
                                            {
                                                permissions[29].is_allowed === 1 && <span onClick={data.process_id.state_id.state === 'Finalizado' || data.process_id.state_id.state === 'Cerrado' || data.process_id.state_id.state === 'Terminado' ? () => {} : toggleReplace} style={{color: 'gray', cursor: 'pointer'}}><i className='fa fa-repeat'></i> Remplazar</span>
                                            }
                                            {
                                                permissions[29].is_allowed === 1 && <br/>
                                            }
                                            {
                                                currentUser.signature !== 'S/N' && type === 'pdf' && <span style={{color: 'gray', cursor: 'pointer'}} onClick={data.process_id.state_id.state === 'Finalizado' || data.process_id.state_id.state === 'Cerrado' || data.process_id.state_id.state === 'Terminado' ? () => {} : toggle}><i className='fa fa-pencil'></i> Firmar</span>
                                            }
                                            <hr style={{borderTop: `1px solid gray`}} />
                                            {
                                                permissions[28].is_allowed === 1 && <span onClick={data.process_id.state_id.state === 'Finalizado' || data.process_id.state_id.state === 'Cerrado' || data.process_id.state_id.state === 'Terminado' ? () => {} : showAlertDelete} style={{color: 'red', cursor: 'pointer'}}><i className='fa fa-close'></i> Eliminar</span>
                                            }
                                        </div>
                                        <div className='col-sm-12 mt-4 mb-3'>
                                            <h4>Propiedades</h4>
                                        </div>
                                        <div className='col-sm-12'>
                                            <span style={{fontSize: 12}}>Nombre: <span style={{color: 'gray', fontSize: 12}}>{data.name}.{data.ext_file}</span></span><br/>
                                            <span style={{fontSize: 12}}>Tipo: <span style={{color: 'gray', fontSize: 12}}>{data.type}</span></span><br/>
                                            <span style={{fontSize: 12}}>Tamaño: <span style={{color: 'gray', fontSize: 12}}>{(data.peso / 1024).toFixed(1)} Mb</span></span><br/>
                                            <hr style={{borderTop: `1px solid gray`}} />
                                            <span style={{fontSize: 12}}>Creado el: <span style={{color: 'gray', fontSize: 12}}>{data.created_at}</span></span><br/>
                                            <span style={{fontSize: 12}}>Creado por: <span style={{color: 'gray', fontSize: 12}}>{data.user_id.name}</span></span><br/>
                                            <hr style={{borderTop: `1px solid gray`}} />
                                            <span style={{fontSize: 12}}>Última modificación: <span style={{color: 'gray', fontSize: 12}}>{data.updated_at}</span></span><br/>
                                            <span style={{fontSize: 12}}>Modificado por: <span style={{color: 'gray', fontSize: 12}}>{data.last_updated_user.name}</span></span><br/>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>        
                        </Col>
                    </Row>
                </div>
            </Container>
            <SignDocumentModal modal={modal} toggle={toggle} file={file} document={data} changing={changing}/>
            <NewTaskModal modal={modalTask} toggle={toggleTask} changing={changing} proid={localStorage.getItem('selectedProcess')} filid={localStorage.getItem('selectedFile')}/>
            <ReplaceFileModal modal={modalReplace} toggle={toggleReplace} changing={changing} />                               
            <div style={{position: 'fixed', top: '45%', right: 30, border: '5px solid #0d6efd', height: 125, width: 360, backgroundColor: 'white', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, boxShadow: '5px 5px 10px black', display: popUpVisible ? 'block' : 'none'}} >
               <span onClick={() => setPopUpVisible(false)} style={{backgroundColor: '#0d6efd', paddingRight: 4, paddingLeft: 4, paddingTop: 1, paddingBottom: 1, float: 'right', borderRadius: 10, color: 'white', fontSize: 8, marginTop: 5, marginRight: 5, cursor: 'pointer'}}>x</span>
               <div style={{padding: 10, fontSize: 11, color: 'gray'}}>
                    <span style={{fontWeight: 'bold'}}>No: </span> {data.process_id.sequential} <br/>
                    <span style={{fontWeight: 'bold'}}>Proceso: </span> {data.process_id.name} <br/>
                    <span style={{fontWeight: 'bold'}}>Estado: </span> <span style={{color: data.process_id.state_id.colour}}>{data.process_id.state_id.state}</span> <br/>
                    <span style={{fontWeight: 'bold'}}>Usuario: </span> <span>{process_user}</span> <br/>
					<span style={{fontWeight: 'bold'}}>Tiempo: </span><span style={{color: 'red'}}>{remainTime}</span><br/>                  
               </div>                          
            </div>    
            <div style={{position: 'fixed', top: '45%', right: 10, border: '1px solid #0d6efd', height: 20, width: 30, backgroundColor: 'white', borderRadius: 15, boxShadow: '5px 5px 10px black', display: popUpVisible ? 'none' : 'block', textAlign: 'center'}} >
               <span onClick={() => setPopUpVisible(true)} style={{cursor: 'pointer', color: '#0d6efd', textAlign: 'center'}} className='fa fa-eye'></span>
            </div>                              
        </Fragment>
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
}

export default Files;
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container } from 'reactstrap';
import { Spinner, Breadcrumbs, Image } from '../../AbstractElements';
import { API_URL, PROFILES_SERVER } from '../../Constant/index';
import UserImg from '../../assets/images/avtar/chat-user-2.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ViewTaskModal from '../../_core/Ui-kits/Modals/Custom/ViewTaskModal';
import NewEmailModal from '../../_core/Ui-kits/Modals/Custom/NewEmailModal';
import { toast } from 'react-toastify';

const History = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE

    const selectedProcess = localStorage.getItem('selectedProcess');
    const token = localStorage.getItem('token');
    const { permissions } = useSelector((data) => data.authUser);
    const history = useNavigate();

    const [users, setUsers] = useState([]);
    const [histories, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalEmail, setModalEmail] = useState(false);
    const [idSelected, setIdSelected] = useState(0);
    const [receptor, setReceptor] = useState(0);

    useEffect(() =>{
        const element = document.getElementById('Procesos');
        element.classList.add('active');
    }, []);

    useEffect(() =>{
        getData();
        
        return () => {
            setUsers([]);
            setHistory([]);
        }
    }, []);
    

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS

    const toggle = () => {
        setModal(!modal);
    }

    const toggleEmail = () => {
        setModalEmail(!modalEmail);
    }

    const getData = async () =>{
        await axios({
            url: `${API_URL}consulHistory/${selectedProcess}`,
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            await axios({
                url: `${API_URL}HistoryProcess/${selectedProcess}`,
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }).then((historyResponse) => {
                setHistory(historyResponse.data.data);
                setUsers(response.data.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    const goToDefinition = (item) => {
        if(item.description.includes("tarea")){
            if(item.task_id !== null){
                setIdSelected(item.task_id.id);
                toggle();
            }else{
                toast.info('La tarea fue eliminada');
            }
        }else if(item.description.includes("archivo")){
            if(item.file_id !== null){
                localStorage.setItem('selectedFile', item.file_id.id);
                history('/archivo');
            }else{
                toast.info('El archivo fue eliminado');
            }
        }else{
            if(item.process_id !== null){
                localStorage.setItem('selectedProcess', item.process_id.id);
                history('/proceso');
            }else{
                toast.info('El proceso fue eliminado');
            }
        }
    }

    const openEmailModal = (item) => {
        if(item.task_id.status === 'A'){
            setReceptor(item);
            toggleEmail();
        }
    }

    const handleBack = () => {
        history('/proceso');
    };

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
            <Breadcrumbs parent="Proceso" title='Historial' />
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <div className='col-sm-12'>
                            <Button onClick={() => handleBack()} color='primary' style={{width: '150px', margin: 0, float: 'right'}}><i className='fa fa-arrow-left'></i> Atrás</Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h5>Gráfico de asignación</h5>
                        <hr style={{borderColor: 'gray', borderWidth: 1}}/>
                        
                        <div className='row'>
                        
                            {
                                users.map((item, i)=> {
                                    return(
                                        <div key={i} className='col-sm-2'>
                                            <div className='d-flex align-content-center align-items-center justify-content-center'>
                                                {
                                                    i !== 0 && <i className='fa fa-long-arrow-right' style={{fontSize: 20, marginRight: 10}}></i>
                                                }
                                                <Image styles={{width: '30px', height: '30px', marginRight: 5}} attrImage={{ className: 'rounded-circle', src: item.user_id.profile_photo_path ? `${PROFILES_SERVER}${item.user_id.profile_photo_path}` : UserImg, alt: '' }} />
                                                <br/>
                                                <p style={{fontSize: 11}}>{item.user_id.name}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <h5 style={{marginTop: 25}}>Historial del proceso</h5>
                        <hr style={{borderColor: 'gray', borderWidth: 1}}/>

                        <div className='row'>
                            {
                                histories.map((item, i) => {
                                    return(
                                        <div key={i} className='col-sm-12 mb-2'>
                                            {item.date} - {item.description} <i className='fa fa-eye' onClick={() => goToDefinition(item)} style={{color: '#1CCC00', fontSize: 18, cursor: 'pointer'}}></i>
                                            {
                                                item.description.includes("tarea") &&
                                                item.task_id !== null &&
                                                <span onClick={() => openEmailModal(item)} className={`badge`} style={{backgroundColor: item.task_id.status === 'C' ? 'green' : 'red', marginLeft: 5, cursor: item.task_id.status === 'C' ? 'default' : 'pointer'}}>{item.task_id.status === 'C' ? 'Finalizada' : 'Pendiente'}</span>
                                            }
                                        </div>
                                    )   
                                })
                            }
                        </div>
                    </CardBody>
                </Card>
            </Container>
            <ViewTaskModal modal={modal} toggle={toggle} id={idSelected}/>
            <NewEmailModal modal={modalEmail} toggle={toggleEmail} receptor={receptor} />
        </Fragment>
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
}

export default History;
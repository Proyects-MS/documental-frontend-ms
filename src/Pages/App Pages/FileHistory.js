import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Spinner, Breadcrumbs } from '../../AbstractElements';
import { API_URL } from '../../Constant/index';
import { useNavigate } from 'react-router';

const FileHistory = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE

    const selectedFile = localStorage.getItem('selectedFile');
    const token = localStorage.getItem('token');
    const [data, setData] = useState({});
    const [reason, setReason] = useState('');
    const [modal, setModal] = useState(false);
    const history = useNavigate();

    const [histories, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const element = document.getElementById('Procesos');
        element.classList.add('active');
    }, []);

    useEffect(() =>{
        getData();
        
        return () => {
            setHistory([]);
        }
    }, []);
    

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS

    const toggle = (reason) => {
        setReason(reason);
        setModal(!modal);
    }

    const getData = async () =>{
        await axios({
            url: `${API_URL}files/${selectedFile}`,
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            await axios({
                url: `${API_URL}HistoryFiles/${selectedFile}`,
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }).then((historyResponse) => {
                setHistory(historyResponse.data.data);
                setData(response.data.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    const goToDefinition = async (item) => {
        await axios({
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
    }

    const handleBack = () => {
        history('/archivo');
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
            <Breadcrumbs parent="Proceso" title='Historial de Archivo' />
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <div className='col-sm-12'>
                            <Button onClick={() => handleBack()} color='primary' style={{width: '150px', margin: 0, float: 'right'}}><i className='fa fa-arrow-left'></i> Atrás</Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h5>Historial de {data.name}.{data.ext_file}</h5>
                        <hr style={{borderColor: 'gray', borderWidth: 1}}/>

                        <div className='row'>
                            {
                                histories.map((item, i) => {
                                    return(
                                        <div key={i} className='col-sm-12 mb-2'>
                                            {item.date} - {item.description} <i className='fa fa-eye' onClick={() => goToDefinition(item)} style={{color: '#1CCC00', fontSize: 18, cursor: 'pointer'}}></i>
                                            {
                                                item.description.includes('remplazó') && <i className='fa fa-info' onClick={() => toggle(item.reason ? item.reason : null)} style={{color: '#0d6efd', fontSize: 18, cursor: 'pointer', marginLeft: 10}}></i>
                                            }
                                        </div>
                                    )   
                                })
                            }
                        </div>
                    </CardBody>
                </Card>
            </Container>
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>{'Motivo de remplazo'}</ModalHeader>
                <ModalBody>
                        <div className='row'>
                            <div className='col-md-12'>
                                <FormGroup>
                                    <textarea className="form-control" disabled value={reason}></textarea>
                                </FormGroup>
                            </div>
                        </div>
                </ModalBody>
                <ModalFooter>
                    <div className='btn btn-danger' onClick={toggle}><i className="icofont icofont-close-squared-alt"></i> Cerrar</div>
                </ModalFooter>
            </Modal>
        </Fragment>
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
}

export default FileHistory;
import React, { Fragment, useState  } from 'react';
import { Card, CardBody, Col, Row, TabContent, TabPane, Container, Input, Button, Media } from 'reactstrap';
import { Image, P } from '../../../AbstractElements';
import { PROFILES_SERVER } from '../../../Constant';
import errorImg from '../../../assets/images/search-not-found.png';
import UserImg from '../../../assets/images/avtar/chat-user-2.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

 
const DataList = ({data, toggle}) => {
    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE
    //console.log(data);

    const { permissions } = useSelector((data) => data.authUser);

    const [filterText, setFilterText] = useState('');
    const history = useNavigate();
    const { currentUser } = useSelector((data) => data.authUser);

    const filteredItems = data.filter(
		item => item.process_id.name && item.process_id.name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.process_id.sequential && item.process_id.sequential.toLowerCase().includes(filterText.toLowerCase()) ||
        item.process_id.hiring && item.process_id.hiring.toLowerCase().includes(filterText.toLowerCase()) ||
        item.process_id.procedures && item.process_id.procedures.toLowerCase().includes(filterText.toLowerCase()) || 
        item.process_id.priority && item.process_id.priority.toLowerCase().includes(filterText.toLowerCase()) ||
        item.process_id.state_id.state && item.process_id.state_id.state.toLowerCase().includes(filterText.toLowerCase()) ||
        item.process_id.user_asig_id.name && item.process_id.user_asig_id.name.toLowerCase().includes(filterText.toLowerCase()) || 
        item.process_id.date && item.process_id.date.toLowerCase().includes(filterText.toLowerCase())
	);

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS

    const handleSelect = (item) =>{
		localStorage.setItem('userProcess', item.process_id.user_asig_id.name);
        localStorage.setItem('selectedProcess', item.process_id.id); 
        history('/proceso');
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


    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // VIEW

    return (
        <Fragment>
        <Container fluid={true} className="data-tables">
            <Row>
            <Col sm="12">
                <Card>
                <CardBody>
                <div className='row w-100' style={{margin: 0, padding: 0, border: 0}}>
                    <div className={`col-md-6`}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <span style={{marginRight: '5px'}}><i color='primary'  className='icofont icofont-search-alt-1' style={{fontSize: '15pt'}}></i></span>
                            <Input type="text" className='input-txt-bx form-control' style={{border: 'none'}} defaultValue={filterText} onChange={e => setFilterText(e.target.value)} placeholder="Buscar proceso" />
                        </div>
                    </div>

                    {/* <div className='col-md-3'>
                        {
                            filterText === "" ?
                            <Button color='primary' style={{width: '100%', margin: 0}} value={currentUser.name} onClick={(e) => {setFilterText(e.target.value === '' ? '' : (e.target.value))}}>Mis Procesos Asignados </Button>   :                        
                            <Button color='primary' style={{width: '100%', margin: 0}} value={''} onClick={(e) => {setFilterText(e.target.value === '' ? '' : (e.target.value))}}> Todos los Procesos</Button>

                        }
                    </div> */}
                    <div className='col-md-3'>
                        <input className="form-control" name="ending" type="date" onChange={(e) => setFilterText(e.target.value === '' ? '' : (e.target.value).toString().split('-')[2] + '-' + (e.target.value).toString().split('-')[1] + '-' + (e.target.value).toString().split('-')[0])}/>
                    </div>
                    <div className='col-md-3'>
                        {
                            permissions[10].is_allowed === 1 &&
                            <Button color='primary' style={{width: '100%', margin: 0}} onClick={toggle}><i className='fa fa-plus'></i> Nuevo Proceso</Button>
                        }
                    </div>
                </div>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        <Col sm="12">
            <Card>
            <CardBody>
                <TabContent activeTab={"1"} id="top-tabContent">
                <TabPane tabId="1">
                    <Fragment>
                            <Row>
                                {
                                    filteredItems.length > 0 ? filteredItems.map((item) =>
                                    <Col md='6 col-xxl-4' key={item.process_id.id}>
                                        <div className="project-box" style={{height: 425}}>
                                            <span style={{backgroundColor: item.process_id.state_id.colour, padding: '5px 6px 4px', fontFamily: '"Roboto", sans-serif, sans-serif', fontWeight: 500, fontSize: 10.5, color: 'white', borderRadius: '0.375rem', cursor: 'pointer'}} onClick={() => {setFilterText(filterText === item.process_id.state_id.state ? '' : item.process_id.state_id.state)}}>{item.process_id.state_id.state}</span>
                                            <span onClick={() => {setFilterText(filterText === item.process_id.priority ? '' : item.process_id.priority)}} className={`badge`} style={{cursor: 'pointer', backgroundColor: item.process_id.priority === 'Alta' ? 'red' : item.process_id.priority === 'Media' ? 'yellow' : 'green', color: item.process_id.priority === 'Media' ? 'black' : 'white'}}>{item.process_id.priority ? item.process_id.priority : 'Baja'}</span>
                                            <h6 onClick={() => handleSelect(item)} style={{width: '100%', marginTop: 15, color: item.process_id.state_id.colour, cursor: 'pointer'}}>{item.process_id.sequential} - {item.process_id.name}</h6>
                                            <Media>
                                                <Image styles={{height: 20}} attrImage={{ className: 'img-20 me-2 rounded-circle', src: item.process_id.user_id.profile_photo_path ? `${PROFILES_SERVER}${item.process_id.user_id.profile_photo_path}` : UserImg, alt: '' }} />
                                                <Media body>
                                                <P>{item.process_id.user_id.name}</P>
                                                </Media>
                                            </Media>
                                            <p style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' , width: '100%'}}>{item.process_id.description}</p>
                                            <div className="project-status mt-4 mb-4">
                                                <hr style={{color: item.process_id.state_id.colour, borderTop: `7px solid ${item.process_id.state_id.colour}`, borderRadius: 50}} />
                                            </div>
                                            <Row className="details">
                                                <Col xs="6"><span>Fecha: </span></Col>
                                                <Col xs="6">
                                                    <p>{item.process_id.date}</p>
                                                </Col>
                                                <Col xs="6"> <span>Asignado a: </span></Col>
                                                <Col xs="6">
                                                    <p style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' , width: '100%'}}>{item.process_id.user_asig_id.name}</p>
                                                </Col>
                                               
                                                <Col xs="6"><span>Contratación: </span></Col>
                                                <Col xs="6">
                                                    <p style={{color: 'black', fontWeight: 'bold'}}>{item.process_id.hiring}</p>
                                                </Col>
                                                <Col xs="6"><span>Procedimiento: </span></Col>
                                                <Col xs="6">
                                                    <p style={{color: 'black', fontWeight: 'bold'}}>{item.process_id.procedure}</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    ) :
                                    <div className="email-body d-flex justify-content-center align-items-center">
                                            <Image attrImage={{ className: 'img-fluid', src: errorImg, alt: '' }} />
                                    </div>
                                }
                            </Row>
                        </Fragment>
                </TabPane>
                </TabContent>
            </CardBody>
            </Card>
        </Col>
        </Fragment>
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default DataList;
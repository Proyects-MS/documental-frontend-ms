import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import TasksContain from '../../Component/Tasks';
import { API_URL, View } from '../../Constant';
import EditTaskModal from '../../_core/Ui-kits/Modals/Custom/EditTaskModal';
import NewTaskModal from '../../_core/Ui-kits/Modals/Custom/NewTaskModal';
import ViewTaskModal from '../../_core/Ui-kits/Modals/Custom/ViewTaskModal';

const Tasks = () => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const { currentUser } = useSelector((data) => data.authUser);
  const { permissions } = useSelector((data) => data.authUser);
  const token = localStorage.getItem('token');

  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [stringDate, setStringDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  const [idSelected, setIdSelected] = useState(0);

  useEffect(() => {
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const todayInput = now.getFullYear()+"-"+(month)+"-"+(day);
    setDate(todayInput);
  }, []);

  useEffect(() => {
    getData();

    return(() => {
      setData([]);
    })
  }, [ change, date ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const toggle = () => {
    setModal(!modal);
  }

  const toggleEdit = () => {
    setModalEdit(!modalEdit);
  }

  const changing = () => {
    setChange(!change);
    setLoading(true);
  }

  const getData = async () => {
    if(date !== ''){
      const dat = new Date(`${date}T00:00:00`);
      const day = ("0" + (dat.getDate())).slice(-2);
      const month = ("0" + (dat.getMonth() + 1)).slice(-2);
      const today = (day)+"-"+(month)+"-"+dat.getFullYear();
      setStringDate(today);
      
      await axios({
        url: `${API_URL}tasksuser/${currentUser.id}/${today}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then((response) => {
        setData(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
    }
  } 

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW
  
  return (
    <Fragment>
      <Breadcrumbs parent="" title="Tareas" />
      <Container fluid={true} className="data-tables">
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
              <div className='row w-100' style={{margin: 0, padding: 0, border: 0}}>
                <div className={`col-md-9`}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <Input style={{width: '150px'}} type="date" className='input-txt-bx form-control' defaultValue={date} onChange={(e) => setDate(e.target.value)}/>
                  </div>
                </div>
                <div className='col-md-3'>
                  <Button color='primary' style={{width: '100%', margin: 0}} onClick={toggle}><i className='fa fa-plus'></i> Nueva Tarea</Button>
                </div>
              </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <TasksContain data={data} date={stringDate} setIdSelected={setIdSelected} toggleEdit={toggleEdit} changing={changing}/>
      <NewTaskModal modal={modal} toggle={toggle} changing={changing}/>
      <EditTaskModal modal={modalEdit} toggle={toggleEdit} changing={changing} id={idSelected}/>


    </Fragment>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Tasks;
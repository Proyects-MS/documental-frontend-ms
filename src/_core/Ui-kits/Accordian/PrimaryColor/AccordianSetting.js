import React, { Fragment, useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Collapse, Table, Button } from 'reactstrap';
import { Btn, H5, Spinner } from '../../../../AbstractElements';
import NewStateModal from '../../Modals/Custom/NewStateModal';
import EditStateModal from '../../Modals/Custom/EditStateModal';
import axios from 'axios';
import { API_URL } from '../../../../Constant';
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';

const AccordianSetting = () => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { permissions } = useSelector((data) => data.authUser);

  const [isOpen, setIsOpen] = useState(0);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getData();

    return(() => {
      setData([]);
    });
  }, [ change ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () =>{
    await axios({
      url: `${API_URL}states`,
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) =>{
      setData(response.data.data);
      setLoading(false);
    }).catch((error) =>{
      console.log(error);
    });
  }

  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));

  const toogleNew = () =>{
    setModal(!modal);
  }

  const toogleEdit = () =>{
    setEditModal(!editModal);
  }

  const changing = () => {
    setChange(!change);
    setLoading(true);
  }

  const showAlert = (id) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea eliminar estado de procesos!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((response) => {
      if (response.isConfirmed) {
        handleDelete(id);
      }
    });
  }

  const handleDelete = async (id) => {
    await axios({
      url: `${API_URL}states/${id}`,
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) => {
      changing();
      toast.success(`Estado de procesos eliminado correctamente`);
    }).catch((error) => {
      console.log(error);
    });
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW 

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <CardBody>
          <div className="default-according" id="accordion1">
            <Card>
              <CardHeader className="bg-primary">
                <div className='row w-100 ' >
                  <div className='col-8'>
                    <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link', color: 'default', onClick: () => toggle(1) }} >
                      <span className="digits">Estados de Procesos</span>
                    </Btn>
                  </div>
                  <div className='col-4 d-flex align-items-center justify-content-end'>
                    {
                      permissions[24].is_allowed === 1 &&
                      <Button color='primary' style={{borderRadius: 50, width: 40, height: 40, padding: 0, backgroundColor: 'white', color: 'white', textAlign: 'center'}} onClick={toogleNew}><i className='fa fa-plus'></i></Button>
                    }
                  </div>
                </div>
              </CardHeader>
              <Collapse isOpen={isOpen === 1}>
                <CardBody>
                  {
                    loading ?
                    <Fragment>
                    <div className="loader-box"><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
                   </Fragment> :
                   <>
                    {
                      data.length > 0 ?
                      <div className='mt-3'>
                        {
                          data.map((item) =>{
                            return(
                              <div key={item.id}>
                                <div className='row'>
                                      <div className='col-10'>
                                        <i className="fa fa-circle f-12" style={{color: item.colour}}/>
                                        <span className='title' style={{cursor: 'pointer'}}> {item.state}</span>
                                      </div>
                                      <div className='col-2'>
                                        <div className='d-flex justify-content-end'>
                                          {
                                            permissions[25].is_allowed === 1 &&
                                            <button style={{border: 'none', backgroundColor: 'transparent'}} onClick={() =>{
                                              setSelectedItem(item);
                                              toogleEdit();
                                            }}>
                                              <i className='fa fa-edit font-primary' style={{fontSize: '15pt'}}></i>
                                            </button>
                                          }
                                          {
                                            permissions[26].is_allowed === 1 &&
                                            <button style={{border: 'none', backgroundColor: 'transparent'}} onClick={() => showAlert(item.id)}>
                                              <i className='fa fa-trash font-primary' style={{fontSize: '15pt'}}></i>
                                            </button>
                                          }
                                        </div>
                                      </div>
                                </div>
                                  
                                <hr style={{borderTop: '1px solid #bbb'}}/>
                              </div>
                            );
                          })
                        }
                      </div> : <></>
                    }
                  </>
                  }
                </CardBody>
              </Collapse>
            </Card>
          </div>
        </CardBody>
      </Card>
      <NewStateModal modal={modal} toggle={toogleNew} changing={changing}/>
      <EditStateModal modal={editModal} toggle={toogleEdit} changing={changing} item={selectedItem}/>
    </Accordion>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default AccordianSetting;
import React, { Fragment, useState } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { LI, UL } from '../../AbstractElements';
import axios from 'axios';
import { API_URL } from '../../Constant';
import { useDispatch } from 'react-redux';
import { selectRole } from '../../Redux/app/actions';
import { toast } from 'react-toastify';
import SweetAlert from 'sweetalert2';
import { useSelector } from 'react-redux';

const Sidebar = ({toggle, data, toggleEdit, setroleSelectedId, changing}) => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const { permissions } = useSelector((data) => data.authUser);

  const [IsOpen, setIsOpen] = useState(false);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  
  const handleSelect = (role) =>{
    dispatch(selectRole(role));
  }

  const handleOpenEdit = (id) =>{
    setroleSelectedId(id);
    toggleEdit();
  }

  const showAlert = (id) =>{
    SweetAlert.fire({
        title: 'Seguro?',
        text: 'Desea eliminar rol! Al eliminar un rol, los usuarios que pertenezcan al mismo serán deshabilitados',
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

  const handleDelete = async (id) =>{
    await axios({
      url: `${API_URL}roles/${id}`,
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) =>{
      changing();
      toast.success('Rol eliminado correctamente');
    }).catch((error) => {
      console.log(error);
    });
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------
  
  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  return (
    <Fragment>
      <div className="md-sidebar job-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>Roles</a>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
          <div className="email-left-aside">
            <Card style={{height: '73vh', overflowY: 'scroll'}} >
              <CardBody>
                <div className="email-app-sidebar">
                   <UL attrUL={{ className: 'simple-list nav main-menu ', role: 'tablist' }}>
                    {
                      permissions[1].is_allowed === 1 &&
                      <LI attrLI={{ className: 'nav-item' }}>
                        <Button color='primary' className="w-100" onClick={toggle}>
                          <i className="fa fa-plus"></i> Nuevo Rol
                        </Button>
                      </LI>
                    }
                    <LI>
                      <br/>
                      <br/>
                    </LI>
                    {
                      data.map((item) =>{
                        return(
                          <LI key={item.id} attrLI={{ className: 'nav-item' }}>
                            <div className='row'>
                                <div className='col-7'>
                                  {item.id !== 1 ?<span className='title' onClick={() => handleSelect(item)} style={{cursor: 'pointer'}}>{item.name}</span>:
                                  <span className='title'>{item.name}</span>
                                  }
                                </div>
                                <div className='col-5'>
                                  <div className='d-flex justify-content-end'>
                                    {item.id !== 1 && permissions[2].is_allowed === 1 && <button onClick={() => handleOpenEdit(item.id)} style={{border: 'none', backgroundColor: 'transparent'}}>
                                      <i className='fa fa-edit font-primary' style={{fontSize: '15pt'}}></i>
                                    </button>}
                                    {item.id !== 1 && permissions[3].is_allowed === 1 && <button onClick={() => showAlert(item.id)} style={{border: 'none', backgroundColor: 'transparent'}}>
                                      <i className='fa fa-trash font-primary' style={{fontSize: '15pt'}}></i>
                                    </button>}
                                  </div>
                                </div>
                            </div>
                            
                            <hr style={{borderTop: '1px solid #bbb'}}/>
                          </LI>
                        )
                      })
                    }
                  </UL> 
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Sidebar;
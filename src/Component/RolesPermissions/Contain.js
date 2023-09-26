import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Star } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Media, Label, Input } from 'reactstrap';
import { H6, P, Image, Spinner } from '../../AbstractElements';
import { Action, API_URL, TOKEN_TEST } from '../../Constant';
import EmailContext from '../../_helper/email';
import errorImg from '../../assets/images/search-not-found.png';
import { toast } from 'react-toastify';

const Contain = () => {

  
  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');  
  const { permissions } = useSelector((data) => data.authUser);

  const { roleSelected } = useSelector((data) => data.appReducer);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    if(roleSelected){
      setLoading(true);
      getData();
    }
  }, [roleSelected, changing]);
  
  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () =>{
    await axios({
      url: `${API_URL}roles_permissions/${roleSelected.id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then((response) =>{
      const dataFiltered = response.data.data.filter((item) => {
        if (item.permission_id !== 21 && item.permission_id !== 22 && item.permission_id !== 23){
          return item;
        }
      });
      setData(dataFiltered);
      setLoading(false);
    }).catch((error) =>{
      setLoading(false);
    })
  }

  const handleChangePermission = async (id, value) =>{
    await axios({
      url: `${API_URL}roles_permissions/${id}`,
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`
      },
      data: {
        is_allowed: !value
      }
    }).then((response) =>{
      toast.success('Permiso modificado correctamente');
    }).catch((error) =>{
      console.log(error);
    });
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // VIEW

  if(!roleSelected){
    return (
      <Fragment>
      <div className="email-right-aside">
        <Card className="email-body" style={{height: '73vh'}}>
          <div className="loader-box" style={{height: '73vh'}}>{`Seleccione un rol...`}</div>
        </Card>
      </div>
    </Fragment>
    );
  }

  if(loading){
    return(
      <Fragment>
        <div className="email-right-aside">
          <Card className="email-body" style={{height: '73vh'}}>
          <div className="loader-box" style={{height: '73vh'}}><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
          </Card>
        </div>
      </Fragment>
    );
  }

  if(!loading){
    
  }
  if(data.length === 0){
    return (
      <Fragment>
      <div className="email-right-aside">
        <Card className="email-body d-flex justify-content-center align-items-center" style={{height: '73vh'}}>
          <Image attrImage={{ className: 'img-fluid', src: errorImg, alt: '' }} />
        </Card>
      </div>
    </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="email-right-aside">
        <Card className="email-body" style={{height: '73vh', overflowY: 'scroll'}}>
          <div className="email-profile">
            <div>
              <div className="pe-0 b-r-light"></div>
              <div className="email-top">
                <Row>
                  <div className="col-12">
                    <h4>
                      {`Permisos de ${roleSelected ? roleSelected.name : ''}`}
                    </h4>
                  </div>
                </Row>
              </div>
              <div className="inbox" style={{padding: '20px'}}>
                {
                  data.map((item) =>{
                    return(
                      <div className='nav-item' key={item.id}>
                        <div className='row' key={item.id}>
                            <div className='col-11'>
                                <span className='title' style={{cursor: 'pointer'}}>{item.real_name}</span>
                            </div>
                            {
                              permissions[2].is_allowed === 1 &&
                              <div className='col-1'>
                                <div className='d-flex justify-content-end'>
                                  <Media body className='text-end switch-sm'>
                                    <Label className="switch">
                                      <input type="checkbox" defaultChecked={item.is_allowed === 0 ? false : true} onChange={() => handleChangePermission(item.id, item.is_allowed)}/><span className='switch-state' ></span>
                                    </Label>
                                  </Media>
                                </div>
                              </div>
                            }
                            
                        </div>
                        <hr style={{borderTop: '1px solid #bbb'}}/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Contain;
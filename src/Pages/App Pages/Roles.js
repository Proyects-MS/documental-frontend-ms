import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { Spinner, Image } from '../../AbstractElements';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import RolesContain from '../../Component/RolesPermissions';
import { API_URL } from '../../Constant';
import NewRoleModal from '../../_core/Ui-kits/Modals/Custom/NewRoleModal';
import EditRoleModal from '../../_core/Ui-kits/Modals/Custom/EditRoleModal';
import errorImg from '../../assets/images/search-not-found.png';
import { useSelector } from 'react-redux';

const Roles = () => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { permissions } = useSelector((data) => data.authUser);

  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [change, setChange] = useState(false);
  const [roleSelectedId, setroleSelectedId] = useState(0);

  useEffect(() =>{
    if(permissions[0].is_allowed === 0){
      window.location.href = '/error';
    }
  }, []);

  useEffect(() =>{
    getData();

    return(() => {
      setData([]);
    })
  }, [ change ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const toggle = () => {
    setModal(!modal)
  }

  const toogleEdit = () => {
    setEditModal(!editModal);
  }

  const changing = () => {
    setChange(!change);
    setLoading(true);
  }

  const getData = async () =>{
    await axios({
      url: `${API_URL}roles`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then((response)=> {
      setData(response.data.data);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    })
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

  if(data.length === 0){
    return(
      <Fragment>
        <div className="loader-box" style={{height: '90vh'}}><Image attrImage={{ className: 'img-fluid', src: errorImg, alt: '' }} /></div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Breadcrumbs parent="Herramientas" title="Roles y Permisos" />
      <RolesContain toggle={toggle} toggleEdit={toogleEdit} data={data} setroleSelectedId={setroleSelectedId} changing={changing}/>
      <NewRoleModal modal={modal} toggle={toggle} data={data} changing={changing}/>
      <EditRoleModal modal={editModal} toggle={toogleEdit} data={data} changing={changing} id={roleSelectedId}/>
    </Fragment>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Roles;
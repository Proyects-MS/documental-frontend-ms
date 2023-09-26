import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Spinner } from '../../AbstractElements';
import UsersDataTable from '../../Component/Tables/DataTable/UsersDataTable';
import { API_URL } from '../../Constant';
import EditUserModal from '../../_core/Ui-kits/Modals/Custom/EditUserModal';
import EditUserModalAvatar from '../../_core/Ui-kits/Modals/Custom/EditUserModalAvatar';
import EditUserModalPassword from '../../_core/Ui-kits/Modals/Custom/EditUserModalPassword';
import EditUserModalSignature from '../../_core/Ui-kits/Modals/Custom/EditUserModalSignature';
import NewUserModal from '../../_core/Ui-kits/Modals/Custom/NewUserModal';

const Users = () => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { permissions } = useSelector((data) => data.authUser);
  
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalAvatar, setEditModalAvatar] = useState(false);
  const [editModalPassword, setEditModalPassword] = useState(false);
  const [editModalSignature, setEditModalSignature] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  useEffect(() =>{
    if(permissions[4].is_allowed === 0){
      window.location.href = '/error';
    }
  }, []);

  useEffect(() =>{
    getData();

    return(() => {
      setData([]);
    });
  }, [ change ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const toggle = () => {
    setModal(!modal);
  }

  const toogleEdit = () => {
    setEditModal(!editModal);
  }

  const toggleEditAvatar = () => {
    setEditModalAvatar(!editModalAvatar);
  }

  const toggleEditPassword = () => {
    setEditModalPassword(!editModalPassword);
  }

  const toggleEditSignature = () => {
    setEditModalSignature(!editModalSignature);
  }

  const changing = () => {
    setChange(!change);
    setLoading(true);
  }

  const getData = async () =>{
    await axios({
      url: `${API_URL}user`,
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then((response) =>{
      setData(response.data.data);
      setLoading(false);
    }).catch((error) =>{
      console.log(error);
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
       <div className="loader-box" style={{height: '90vh'}}>{'No existen registros de roles...'}</div> 
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Breadcrumbs parent="Herramientas" title="Usuarios" />
      <UsersDataTable toggle={toggle} toggleEdit={toogleEdit} setItemSelected={setItemSelected} tableData={data} changing={changing} toggleEditAvatar={toggleEditAvatar} toggleEditPassword={toggleEditPassword} toggleEditSignature={toggleEditSignature}/>
      <NewUserModal modal={modal} toggle={toggle} changing={changing}/>
      <EditUserModal modal={editModal} toggle={toogleEdit} changing={changing} item={itemSelected}/>
      <EditUserModalAvatar modal={editModalAvatar} toggle={toggleEditAvatar} changing={changing} item={itemSelected}/>
      <EditUserModalPassword modal={editModalPassword} toggle={toggleEditPassword} changing={changing} item={itemSelected}/>
      <EditUserModalSignature modal={editModalSignature} toggle={toggleEditSignature} changing={changing} item={itemSelected}/>
    </Fragment>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Users;
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '../../AbstractElements';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import UsersEditContain from '../../Component/Users/UsersEdit';
import { API_URL } from '../../Constant';
import EditUserModalSignature from '../../_core/Ui-kits/Modals/Custom/EditUserModalSignature';
import EditUserModalAvatar from '../../_core/Ui-kits/Modals/Custom/EditUserModalAvatar';

const ProfileUser = () => {

    const { currentUser } = useSelector((data) => data.authUser);
    const token = localStorage.getItem('token');

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [editModalSignature, setEditModalSignature] = useState(false);
    const [editModalAvatar, setEditModalAvatar] = useState(false);
    const [itemSelected, setItemSelected] = useState(currentUser);

    useEffect(() =>{
      getData();
    }, []);

    const toggleEditSignature = () => {
      setEditModalSignature(!editModalSignature);
    }

    const toggleEditAvatar = () => {
      setEditModalAvatar(!editModalAvatar);
    }

    const getData = async () => {
      await axios({
        url: `${API_URL}user/${currentUser.id}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then((response) => {
        setData(response.data.data);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
      });
    }

    if(loading){
      return(
        <Fragment>
          <div className="loader-box" style={{height: '90vh'}}><Spinner attrSpinner={{ className: 'loader-7' }}/></div> 
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Breadcrumbs parent="" title="Perfil" />
        <UsersEditContain data={data} toggleEditSignature={toggleEditSignature} toggleEditAvatar={toggleEditAvatar}/>
        <EditUserModalSignature modal={editModalSignature} toggle={toggleEditSignature} changing={() => {}} item={itemSelected}/>
        <EditUserModalAvatar modal={editModalAvatar} toggle={toggleEditAvatar} changing={() => {}} item={itemSelected}/>
      </Fragment>
    );
};
export default ProfileUser;
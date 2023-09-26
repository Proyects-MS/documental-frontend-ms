
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Spinner } from '../../AbstractElements';
import { API_URL } from '../../Constant';
import NewProcedureModal from '../../_core/Ui-kits/Modals/Custom/NewProcedureModal';
import ProcedureDataTable from '../../Component/Tables/DataTable/ProcedureDataTable';
import EditProcedureModal from '../../_core/Ui-kits/Modals/Custom/EditProcedureModal';
import axios from 'axios';


const Procedure = () => {


    // STATE

    const token = localStorage.getItem('token');
    // const { permissions } = useSelector((data) => data.authTypeSubprocess);
    
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    // const [editModalAvatar, setEditModalAvatar] = useState(false);
    // const [editModalPassword, setEditModalPassword] = useState(false);
    // const [editModalSignature, setEditModalSignature] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [change, setChange] = useState(false);
    const [itemSelected, setItemSelected] = useState({});


  
    useEffect(() =>{
    //   if(permissions[4].is_allowed === 0){
    //     window.location.href = '/error';
    //   }
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
  
    // const toggleEditAvatar = () => {
    //   setEditModalAvatar(!editModalAvatar);
    // }
  
    // const toggleEditPassword = () => {
    //   setEditModalPassword(!editModalPassword);
    // }
  
    // const toggleEditSignature = () => {
    //   setEditModalSignature(!editModalSignature);
    
  
    const changing = () => {
      setChange(!change);
      setLoading(true);
    }
  
    const getData = async () =>{
      await axios({
        url: `${API_URL}procedure`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        }
      }).then((response) =>{
        setData(response.data.data);
        console.log(response.data.data);
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
  
    // if(data.length === 0){
    //   return(
    //     <Fragment>
    //      <div className="loader-box" style={{height: '90vh'}}>{'No existen registros de Procesos...'}</div> 
    //     </Fragment>
    //   );
    // }
  
    return (
      <Fragment>
         <Breadcrumbs  title="Procedimientos" />
         <ProcedureDataTable toggle={toggle} toggleEdit={toogleEdit} setItemSelected={setItemSelected} tableData={data} changing={changing}/>
         <NewProcedureModal modal={modal} toggle={toggle} changing={changing}/>
         <EditProcedureModal modal={editModal} toggle={toogleEdit} changing={changing} item={itemSelected}/>
       
         </Fragment>
    );
  
    // -----------------------------------------------------------------------------------------------------------------------------------------
  };

export default Procedure;
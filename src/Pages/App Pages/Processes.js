import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '../../AbstractElements';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ProcessesContain from '../../Component/Processes';
import { API_URL } from '../../Constant';
import NewProcessModal from '../../_core/Ui-kits/Modals/Custom/NewProcessModal';

const Processes = () => {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // STATE

  const token = localStorage.getItem('token');
  const { permissions } = useSelector((data) => data.authUser);
  const { currentUser } = useSelector((data) => data.authUser);
  

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    if(permissions[9].is_allowed === 0){
      window.location.href = '/error';
    }
  }, []);

  useEffect(() => {
      getData();
      return () => {
          setData({});
      };
  }, [ change ]);

  // -----------------------------------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // FUNCTIONS

  const getData = async () =>{
      await axios({
          url: `${API_URL}processuser/${currentUser.id}`,
          method: 'GET',
          headers: {
              'authorization': `Bearer ${token}`
          }
      }).then((response) =>{
          setData(response.data.data);
          //console.log(currentUser);
          setLoading(false);
      }).catch((error) =>{
          console.log(error);
      });
  }

  const toggle = () => {
    setModal(!modal);
  }

  const changing = () => {
    setChange(!change);
    setLoading(true);
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

  return (
    <Fragment>
      <Breadcrumbs parent="" title="Procesos" />
      <ProcessesContain data={data} toggle={toggle} changing={changing}/>
      <NewProcessModal modal={modal} toggle={toggle} changing={changing}/>
    </Fragment>
  );

  // -----------------------------------------------------------------------------------------------------------------------------------------
};
export default Processes;
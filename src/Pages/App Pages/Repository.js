import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '../../AbstractElements';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import RepositoryContain from '../../Component/Repository';
import { API_URL } from '../../Constant';

const Repository = () => {

    const token = localStorage.getItem('token');
    const { permissions } = useSelector((data) => data.authUser);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        if(permissions[19].is_allowed !== 1){
          window.location.href = '/error';
        }
    }, []);

    useEffect(() => {
        getData();

        return(() => {
            setData([]);
        });
    }, []);

    const getData = async () => {
        await axios({
            url: `${API_URL}files`,
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
            <Breadcrumbs parent="" title=" Repositorio" />
            <RepositoryContain data={data}/>
        </Fragment>
    );
};
export default Repository;
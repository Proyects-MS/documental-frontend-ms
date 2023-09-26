import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useJwt } from "react-jwt";
import { firebase_app } from '../Config/Config';
import { authHeader, handleResponse } from '../Services/Fack.Backend';
import { useDispatch } from 'react-redux';
import { loginUserPermissions, loginUserSuccess } from '../Redux/auth/actions';
import Loader from '../Layout/Loader';
import axios from 'axios';
import { API_URL } from '../Constant';

const PrivateRoute = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE

    const token = localStorage.getItem('token');
    const { decodedToken, isExpired } = useJwt(token);
    const dispatch = useDispatch();
    const history = useNavigate();

    const [currentUser, setCurrentUser] = useState({});
    const [isMounted, setIsMounted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(token !== null){
        setIsMounted(true);
        if (isMounted) {
            if(!isExpired){
                let user ={
                    id: decodedToken.id,
                    name: decodedToken.name,
                    email: decodedToken.email,
                    profile_photo_path: decodedToken.profile_photo_path,
                    signature_password: decodedToken.signature_password,
                    signature: decodedToken.signature,
                    identification_card: decodedToken.identification_card,
                    role_id: decodedToken.role_id
                }
    
                getPermissions(user);

                if(window.location.pathname === '/'){
                    history('/dashboard');
                }
            }else{
                history('/login');
            }
        }
        }else{
            history('/login');
        }
        return () => {
            setIsMounted(false);
        };
    }, [ decodedToken ]);

    const getPermissions = async (user) =>{
        await axios({
            url: `${API_URL}roles_permissions/${user.role_id}`,
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) =>{
            setCurrentUser(user);
            dispatch(loginUserSuccess(user));
            dispatch(loginUserPermissions(response.data.data));
            setLoading(false);
        }).catch((e) =>{
            console.log(e);
            setLoading(false);
        });
    }

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // VIEW

    if(loading){
        return(
            <Loader/>
        );
    }

    return (
        <Outlet /> 
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default PrivateRoute;


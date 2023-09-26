import React, { Fragment, useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap';
import { Btn, Spinner } from '../../../AbstractElements';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { handleResponse } from '../../../Services/Fack.Backend';
import FormHeader from './FormHeader';
import { loginUser } from '../../../Redux/auth/actions';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../Constant';
import axios from 'axios';
import { preventDefault } from '@fullcalendar/react';

const LoginTab = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // STATE

    const dispatch = useDispatch();
    const history = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [togglePassword, setTogglePassword] = useState(false);

    // -----------------------------------------------------------------------------------------------------------------------------------------
    
    // -----------------------------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        await axios({
            url: `${API_URL}auth/login`,
            method: 'POST',
            data: {identification_card: userName, password}
        }).then(async (response) => {
            if(response.data.user.status === 'A'){
                await axios({
                    url: `${API_URL}roles_permissions/${response.data.user.role_id}`,
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${response.data.access_token}`
                    }
                }).then((r) =>{
                    dispatch(loginUser(response.data, history, r.data.data));
                    setLoading(false);
                }).catch((e) =>{
                    console.log(e);
                    setLoading(false);
                });
            }else{
                toast.error("Error: Usuario no activo, contáctese con el administrador del sistema.");
                setLoading(false);
            }
        }).catch((error) => {
            switch (error.response.status) {
                case 401:
                    toast.error("Error: Usuario o contraseña incorrectos.");
                    break;
                case 422:
                    toast.error("Error: Datos inválidos.");
                    break;
                case 0:
                    toast.error("Error: No se pudo establecer conexión con el backend.");
                    break;
            }
            setLoading(false);
        });
    };
    
    // -----------------------------------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------------------------------
    // VIEW

    return (
        <Fragment>
            <Form className="theme-form login-form" onSubmit={(e) => handleLogin(e)}>
                <FormHeader />
                <FormGroup>
                    <Label>{'Cédula'}</Label>
                    <InputGroup>
                        <InputGroupText><i className='icon-user'></i></InputGroupText>
                        <Input className="form-control" type="text" required="" onChange={e => setUserName(e.target.value)} defaultValue={userName} />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label>{'Contraseña'}</Label>
                    <InputGroup>
                        <InputGroupText><i className='icon-lock'></i></InputGroupText>
                        <Input className="form-control" type={togglePassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} defaultValue={password} required="" />
                        <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? '' : 'show'}></span></div>
                    </InputGroup>
                </FormGroup>
                {/* <FormPassword /> */}
                <FormGroup>
                    {
                        loading ? <div className="loader-box"><Spinner attrSpinner={{ className: 'loader-7' }}/></div> :
                        <Button type='submit' className='mt-5 form-control' color='danger'>{'INGRESAR'}</Button>
                    }
                </FormGroup>
            </Form>
        </Fragment>
    );

    // -----------------------------------------------------------------------------------------------------------------------------------------
};

export default LoginTab;
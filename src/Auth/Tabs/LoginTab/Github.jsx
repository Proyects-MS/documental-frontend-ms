import React, { Fragment, useState, useEffect } from 'react';
import { GitHub } from 'react-feather';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { firebase_app, githubProvider, Jwt_token } from '../../../Config/Config';

const GithubCus = () => {
    const history = useNavigate();

    const [value, setValue] = useState();
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('profileURL', value);
        localStorage.setItem('Name', name);
    }, [value, name]);
    const githubAuth = async () => {
        try {
            firebase_app.auth().signInWithPopup(githubProvider).then(function (result) {
                setValue(result.user.photoURL);
                setName(result.additionalUserInfo.username);
                localStorage.setItem('token', Jwt_token);
                setTimeout(() => {
                    history(`${process.env.PUBLIC_URL}/dashboard/default`);
                }, 200);
            });
        } catch (error) {
            setTimeout(() => {
                toast.error('Oppss.. The password is invalid or the user does not have a password.');
            }, 200);
        }
    };
    return (
        <Fragment>
            <a href='#javascript' onClick={githubAuth} ><GitHub /></a>
        </Fragment>
    );
};

export default GithubCus;
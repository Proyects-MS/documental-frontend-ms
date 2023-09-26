import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { firebase_app, facebookProvider, Jwt_token } from '../../../Config/Config';
import { FaceBookSVG } from '../../../Data/svgIcons';

const FacebookCus = () => {

    const history = useNavigate();

    const [value, setValue] = useState();
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('profileURL', value);
        localStorage.setItem('Name', name);
    }, [value, name]);

    const facebookAuth = async () => {
        try {
            firebase_app.auth().signInWithPopup(facebookProvider).then(function (result) {
                setValue(result.user.photoURL);
                setName(result.user.displayName);
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
            <a href='#javascript' onClick={facebookAuth}><FaceBookSVG /></a>
        </Fragment>
    );
};

export default FacebookCus;
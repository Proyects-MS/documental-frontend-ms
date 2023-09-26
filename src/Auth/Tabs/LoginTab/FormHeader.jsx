import React, { Fragment } from 'react';
import { H4, H6, Image } from '../../../AbstractElements';
import logo from '../../../assets/images/logo/miranda.png';

const FormHeader = () => {
    return (
        <Fragment>
            <div style={{textAlign: 'center'}}>
                <Image attrImage={{src: `${logo}`, alt: '' }} styles={{width: 150, height: 150}} />
                <H4 style={{marginTop: 20}} >{'Sistema de Gestión Documental'}</H4>
                <H6>{'Bienvenido! Ingresa a tu cuenta.'}</H6>
            </div>
        </Fragment>
    );
};
export default FormHeader;
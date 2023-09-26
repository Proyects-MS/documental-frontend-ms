import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import { Btn, H2, P } from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE } from '../../../Constant';
import { Error4 } from '../../../Data/svgIcons';

const ErrorPage4 = () => {
    return (
        <Fragment>
            <div className="error-wrapper error-page1">
                <Container>
                    <div className="svg-wrraper">
                        <Error4 />
                    </div>
                    <Col md="8" className="offset-md-2">
                        <H2>Oops! Esta página no esta disponible.</H2>
                        <P attrPara={{ className: 'sub-content' }} >La página a la que intentas ingresar no esta actualmente disponible. Esto se debe a que la página no existe o no tienes permisos para acceder a ella.</P>
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                            <Btn attrBtn={{ className: 'btn-lg', color: 'primary' }}>{'IR A LA PÁGINA DE INCIO'}</Btn>
                        </Link>
                    </Col>
                </Container>
            </div>
        </Fragment >
    );
};

export default ErrorPage4;
import React, { Fragment, useEffect } from 'react'
import { Container } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import DefaultContain from '../../Component/DashBoard/Default';

const Home = () => {

    useEffect(() =>{
        const element = document.getElementById('Inicio');
        element.classList.add('active');
    }, []);

    return (
        <Fragment>
            <div className="page-title"></div>
            <DefaultContain />
        </Fragment>
    );
}

export default Home;
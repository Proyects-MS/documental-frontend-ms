import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import RegisterFrom from './RegisterFrom';

const RegisterSimple = () => {
    return (
        <Fragment>
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col xs='12' className="p-0">
                            <div className='login-card1'>
                                <RegisterFrom />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment >
    );
};

export default RegisterSimple;
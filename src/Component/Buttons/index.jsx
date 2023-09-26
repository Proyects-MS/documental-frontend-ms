import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import DefaultButtonContain from './Default';
import EdgeButtonContain from './Edge';
import FlatButtonContain from './FlatBtn';
import GroupButtonClass from './GroupBtn/GroupButton';
import RaisedButtonContain from './RaisedBtn';

const ButtonsContain = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <FlatButtonContain />
                    <EdgeButtonContain />
                    <RaisedButtonContain />
                    <GroupButtonClass />
                    <DefaultButtonContain />
                </Row>
            </Container>
        </Fragment>
    );
};
export default ButtonsContain;
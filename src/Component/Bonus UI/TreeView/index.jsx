import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicTree from './BasicTree';
import CheckboxTree from './CheckboxTree';
import ContextmenuTree from './ContextmenuTree';
import DragTree from './DragTree';

const TreeViewContain = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <BasicTree />
                    <CheckboxTree />
                    <DragTree />
                    <ContextmenuTree />
                </Row>
            </Container>
        </Fragment>
    );
};

export default TreeViewContain;
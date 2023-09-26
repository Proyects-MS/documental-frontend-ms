import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BothDragClass from './BothDrag';
import DragCardOnlyClass from './DragCardOnly';
import DragOnlyContentClass from './DragOnlyContent';

const DraggingCardContain = () => {

    return (
        <Fragment>
            <Container fluid={true}>
                <Row className="ui-sortable" >
                    <BothDragClass />
                    <DragCardOnlyClass />
                    <DragOnlyContentClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default DraggingCardContain;
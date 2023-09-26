import React, { Fragment } from 'react';
import Board from '@asseinfo/react-kanban';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { DragOnlyContent } from '../../../../Constant';
import { H5 } from '../../../../AbstractElements';


const DragOnlyContentClass = () => {
    const board2 = {
        columns: [
            {
                id: 5,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 5,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 6,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 6,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    };
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="pb-0"><H5>{DragOnlyContent}</H5></CardHeader>
                    <CardBody className="draggable-card">
                        <Board initialBoard={board2} disableColumnDrag>{board2}</Board>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default DragOnlyContentClass;
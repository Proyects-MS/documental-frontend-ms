import React, { Fragment } from 'react';
import DeniReactTreeView from 'deni-react-treeview';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5 } from '../../../AbstractElements';

const DragTree = () => {
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader className='pb-0'>
                        <H5>{'Lazy Loading Tree'}</H5>
                    </CardHeader>
                    <CardBody>
                        <div id="dragTree">
                            <DeniReactTreeView
                                url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json"
                                lazyLoad={true}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default DragTree;
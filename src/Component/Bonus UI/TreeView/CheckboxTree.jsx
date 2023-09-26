import React, { Fragment } from 'react';
import DeniReactTreeView from 'deni-react-treeview';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5 } from '../../../AbstractElements';

const themes = ['classic'];


const CheckboxTree = () => {
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader className='pb-0'>
                        <H5>{'Checkbox Tree'}</H5>
                    </CardHeader>
                    <CardBody>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
                            {
                                themes.map((theme, index) => {
                                    return (
                                        <DeniReactTreeView
                                            style={{ marginRight: '10px', marginBottom: '10px' }}
                                            key={index}
                                            showCheckbox={true}
                                            theme={theme}
                                            url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json"
                                        />
                                    );
                                })
                            }
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default CheckboxTree;
import React, { Fragment } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { P } from '../../../AbstractElements';
import { Active, ChataApp_p1, ChataApp_p2 } from '../../../Constant';

const MenuTab2 = () => {
    return (
        <Fragment>
            <div className="people-list"><div className="search">
                <Form className="theme-form">
                    <FormGroup>
                        <Input className="form-control" type="text" placeholder="Write Status..." />
                        <i className="fa fa-pencil"></i>
                    </FormGroup>
                </Form></div>
            </div>
            <div className="status">
                <P attrPara={{ className: 'font-primary f-w-600' }}>
                    {Active}
                </P> <hr />
                <P>
                    {ChataApp_p1}
                    <i className="icofont icofont-emo-heart-eyes font-danger f-20"></i>
                    <i className="icofont icofont-emo-heart-eyes font-danger f-20 ms-1"></i>
                </P>
                <hr />
                <P>
                    {ChataApp_p2}
                    <i className="icofont icofont-emo-rolling-eyes font-success f-20"></i>
                </P>
                <hr />
            </div>
        </Fragment>
    );
};
export default MenuTab2;
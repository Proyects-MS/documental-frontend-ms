import React, { Fragment } from 'react';
import SweetAlert from 'sweetalert2';
import { AlertState } from '../../../Constant';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { AlertSweetalertData } from '../../../Data/Bonus-ui';
import { Btn, H5 } from '../../../AbstractElements';

const Alert = () => {
    const Displayalert = (name) => {
        if (name === 'alertSuccess') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'success' });
        }
        if (name === 'alertDanger') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'error' });
        }
        if (name === 'alertInfo') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'info' });
        }
        if (name === 'alertWarning') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'warning' });
        }
    };
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{AlertState}</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="btn-showcase">
                            {AlertSweetalertData.map((item) =>
                                <Btn attrBtn={{ color: item.color, className: item.class, name: item.name, onClick: (e) => Displayalert(e.target.name) }} key={item.id}>{item.title}</Btn>
                            )}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Alert;
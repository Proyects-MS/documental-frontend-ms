import React, { Fragment, useState } from 'react';
import SweetAlert from 'sweetalert2';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { BasicExamples } from '../../../Constant';
import { BasicSweetalrtData } from '../../../Data/Bonus-ui';
import { Btn, H5 } from '../../../AbstractElements';


const BasicComponent = () => {
    // eslint-disable-next-line
    const [alert, setalert] = useState(false);

    const Displayalert = (name) => {

        setalert(true);
        if (name === 'basic') {
            SweetAlert.fire({ title: 'Hello world!' });
        }
        if (name === 'basictitlealert') {
            SweetAlert.fire({ title: 'Heres the title!', text: '...and heres the text!' });
        }
        if (name === 'basicsuccessalert') {
            SweetAlert.fire({
                title: 'Good job!',
                text: 'You clicked the button!',
                icon: 'info',

            });
        }
        if (name === 'basicinfoalert') {
            SweetAlert.fire({
                title: 'Click on either the button or outside the modal.',
            })
                .then((result) => {
                    if (result.value) {
                        SweetAlert.fire(`The returned value is: ${result.value}`
                        );
                    } else {
                        SweetAlert.fire('The returned value is: null');
                    }

                });
        }
        if (name === 'basicwarningalert') {
            SweetAlert.fire({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'cancel',
                reverseButtons: true
            })
                .then((result) => {
                    if (result.value) {
                        SweetAlert.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    } else {
                        SweetAlert.fire(
                            'Your imaginary file is safe!'
                        );
                    }
                });
        }
    };

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{BasicExamples}</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="btn-showcase">
                            {BasicSweetalrtData.map((item) =>
                                <Btn attrBtn={{ color: item.color, className: item.class, name: item.name, onClick: (e) => Displayalert(e.target.name) }} key={item.id}>{item.title}</Btn>
                            )}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};

export default BasicComponent;
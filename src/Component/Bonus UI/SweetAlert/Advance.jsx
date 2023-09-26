import React, { Fragment, useState } from 'react';
import SweetAlert from 'sweetalert2';
import { AdvancedState } from '../../../Constant';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { AdvancedData } from '../../../Data/Bonus-ui';
import { Btn, H5 } from '../../../AbstractElements';

const Advanced = () => {
    // eslint-disable-next-line
    const [alert, setalert] = useState(false);
    const Displayalert = (name) => {
        setalert(true);

        if (name === 'advanceSuccess') {
            SweetAlert.mixin({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3']
            }).queue([
                {
                    title: 'Question 1',
                    text: 'Chaining swal2 modals is easy'
                },
                'Question 2',
                'Question 3'
            ]).then((result) => {
                if (result.value) {
                    const answers = JSON.stringify(result.value);
                    SweetAlert.fire({
                        title: 'All done!',
                        html: `
                    Your answers:
                    <pre><code>${answers}</code></pre>
                  `,
                        confirmButtonText: 'Lovely!'
                    });
                }
            });
        }
        if (name === 'advanceDanger') {
            SweetAlert.fire({
                title: 'Are you sure you want to do this?',
                cancelButtonText: 'Oh noez!',
                confirmButtonText: 'Aww yiss!',
                reverseButtons: true,
                showCancelButton: true,
            });
        }
        if (name === 'advanceInfo') {
            SweetAlert.fire({
                title: 'Write something here:',
                input: 'text',
            })
                .then((result) => {
                    if (result.value) {
                        SweetAlert.fire(`You typed: ${result.value}`);
                    } else {
                        SweetAlert.fire('You typed: null');
                    }
                });
        }
        if (name === 'advanceWarning') {
            SweetAlert.fire({
                title: 'Are you sure you want to do this?',
                cancelButtonText: 'Oh noez!',
                confirmButtonText: 'Aww yiss!',
                reverseButtons: true,
                showCancelButton: true,
            });
        }
    };

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <CardHeader className="pb-0">
                        <H5>{AdvancedState}</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="btn-showcase">
                            {AdvancedData.map((item) =>
                                <Btn attrBtn={{ color: item.color, className: item.class, name: item.name, onClick: (e) => Displayalert(e.target.name) }} key={item.id}>{item.title}</Btn>
                            )}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Advanced;
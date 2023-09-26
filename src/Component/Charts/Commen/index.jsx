import React, { Fragment } from 'react';
import { CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';

const CommenHeader = (props) => {
    return (
        <Fragment>
            <CardHeader className="pb-0">
                <H5>{props.title}</H5>
            </CardHeader>
        </Fragment>
    );
};
export default CommenHeader;
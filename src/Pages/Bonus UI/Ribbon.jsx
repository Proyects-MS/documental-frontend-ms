import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import RibbonsContain from '../../Component/Bonus UI/Ribbons';

const Ribbons = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Bonus UI" title="Ribbon" />
            <RibbonsContain />
        </Fragment>
    );
};

export default Ribbons;
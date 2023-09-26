import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import RangeSliderContain from '../../Component/Bonus UI/RangeSlider';

const RangeSlider = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Bonus UI" title="Range Slider" />
            <RangeSliderContain />
        </Fragment>
    );
};

export default RangeSlider;
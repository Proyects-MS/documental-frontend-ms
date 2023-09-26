import React from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import { AgencyData } from '../../../../Data/Jobsearch';

const AgencyCard = () => {
    return (
        <div className="job-description">
            <H6>Agency experience</H6>
            <UL attrUL={{ className: 'simple-list' }}>
                {
                    AgencyData.map((item) => {
                        return (
                            <LI key={item.id}>{item.data}</LI>
                        );
                    })
                }
            </UL>
        </div >
    );
};
export default AgencyCard;
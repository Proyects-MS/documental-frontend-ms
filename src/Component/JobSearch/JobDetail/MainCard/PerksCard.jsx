import React from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import { Perks } from '../../../../Constant';
import { PerksCardData } from '../../../../Data/Jobsearch';

const PerksCard = () => {
    return (
        <div className="job-description">
            <H6>{Perks}</H6>
            <UL attrUL={{ className: 'simple-list' }}>
                {
                    PerksCardData.map((item) => {
                        return (
                            <LI key={item.id}> {item.data}</LI>
                        );
                    })
                }
            </UL>
        </div >
    );
};
export default PerksCard;
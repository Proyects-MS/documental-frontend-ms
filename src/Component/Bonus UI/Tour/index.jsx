import React, { Fragment, useState } from 'react';
import { TourProvider, useTour } from '@reactour/tour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import TourMain from './TourMain';

const steps = [
  {
    selector: '.step1',
    content: 'This is Profile image',
  },
  {
    selector: '.step2',
    content: 'Change Profile image here',
  },
  {
    selector: '.step3',
    content: 'This is your Social details',
  },
  {
    selector: '.step4',
    content: 'This is your Your detail',
  },
  {
    selector: '.step5',
    content: 'This is the your first Post',
  },
  {
    selector: '.step6',
    content: 'This is the your Last Post'
  }
];

const ToursContain = () => {
  const { setIsOpen } = useTour;
  const [opentour, setopentour] = useState(true);
  const closeTour = () => {
    setopentour(false);
  };
  const disableBody = target => disableBodyScroll(target);
  const enableBody = target => enableBodyScroll(target);

  return (
    <Fragment>
      <TourProvider steps={steps}
        // rounded={5}
        isOpen={() => setIsOpen(true)}
        disableInteraction={true}
        disableKeyboardNavigation={false}
        onRequestClose={closeTour}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}>
        <TourMain />
      </TourProvider>

      {/* <Tour
        steps={steps}
        rounded={5}
        isOpen={opentour}
        disableInteraction={true}
        disableKeyboardNavigation={false}
        onRequestClose={closeTour}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      /> */}


    </Fragment>

  );
};

export default ToursContain;
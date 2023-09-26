import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicClass from './Basic';
import DefaultSteps from './DefaultSteps';
import PearlsStepsClass from './PearlsSteps';
import PearlsStepSizingClass from './PearlsStepSizing';
import PearlsStepStatesClass from './PearlsStepStates';
import StepsSizingClass from './StepSizing';
import StepsStatesClass from './StepsStates';
import StepsWithIcon from './StepsWithIcon';
import VerticalStepClass from './VerticalStep';

const StepsContain = () => {
    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <BasicClass />

                    <StepsWithIcon />

                    <StepsStatesClass />

                    <StepsSizingClass />

                    <VerticalStepClass />

                    <DefaultSteps />

                    <PearlsStepsClass />

                    <PearlsStepSizingClass />

                    <PearlsStepStatesClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default StepsContain;
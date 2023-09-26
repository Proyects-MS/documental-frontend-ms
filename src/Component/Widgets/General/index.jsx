import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BrowserWidgetsCard from './BrowserWidgetsCard';
import CalendarWidgets from './CalendarWidgets';
import ContactUsWidgets from './ContactUsWidgets';
import CustomerFeedback from './CustomerFeedback';
import DeveloperProfile from './DeveloperProfile';
import Earnings from './Earnings';
import EmoployeeStatus from './EmployeeStatus';
import GeneralCalendar from './GeneralCalendar';
import ManagerProfile from './ManagerProfile';
import MobileWidgets from './MobileWidgets';
import ProductCart from './ProductCart';
import RecentActivity from './RecentActivity';
import Sales from './Sales';
import SocialHandle from './SocialHandle';

const GeneralContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="general-widget">
        <Row>
          <Earnings />
          <Sales />
          <GeneralCalendar />
          <CustomerFeedback />
          <MobileWidgets />
          <RecentActivity />
          <ManagerProfile />
          <DeveloperProfile />
          <SocialHandle />
          <BrowserWidgetsCard />
          <ProductCart />
          <EmoployeeStatus />
          <CalendarWidgets />
          <ContactUsWidgets />
        </Row>
      </Container>
    </Fragment>
  );
};
export default GeneralContain;
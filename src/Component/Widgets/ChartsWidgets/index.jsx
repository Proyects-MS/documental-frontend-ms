import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import SaleChart from './SaleChart';
import ProjectChart from './ProjectChart';
import ProductChart from './ProductChart';
import MarketingExpenses from './MarketingExpenses';
import TotalEarningChart from './TotalEarningChart';
import SkillStatusChart from './SkillStatusChart';
import OrderStatusChart from './OrderStatusChart';
import LiveProductionChart from './LiveProductionChart';
import TurnoverChart from './TurnoverChart';
import MonthlySaleschart from './MonthlySalesChart';
import UsesChart from './UsesChart';
import BrowserUsesChart from './BrowserUsesChart';
import FinanceChart from './FinanceChart';
import OrderStatus2 from './OrderStatus';

const ChartsContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <SaleChart />
          <ProjectChart />
          <ProductChart />
        </Row>
        <Row>
          <MarketingExpenses />
          <TotalEarningChart />
          <SkillStatusChart />
          <OrderStatusChart />
        </Row>
        <Row>
          <LiveProductionChart />
          <TurnoverChart />
          <MonthlySaleschart />
          <UsesChart />
        </Row>
        <Row>
          <BrowserUsesChart />
          <FinanceChart />
          <OrderStatus2 />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ChartsContain;
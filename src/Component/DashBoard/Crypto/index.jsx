import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BitCoin from './BitCoin';
import BuySellCard from './BuySellCard';
import CandlestickCard from './CandlestickCard';
import ChatCard from './ChatCard';
import Ethereum from './Ethereum';
import Litecoin from './Litecoin';
import NotificationCrypto from './Notification';
import Ripple from './Ripple';
import TradingActivity from './TradingActivity';

const CryptoContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="crypto-dash">
        <Row>
          <BitCoin />
          <Ripple />
          <Ethereum />
          <Litecoin />
          <TradingActivity />
          <NotificationCrypto />
          <ChatCard />
          <CandlestickCard />
          <BuySellCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default CryptoContain;
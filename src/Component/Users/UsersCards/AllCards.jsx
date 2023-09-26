import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardFooter, CardHeader, Col } from 'reactstrap';
import { H3, H4, H6, LI, UL, Image } from '../../../AbstractElements';

const AllCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/usercard.json`).then(res => setCards(res.data));
  }, []);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {
        cards.map((item) => {
          return (
            <Col md="6" xl="4" lg="6" className="box-col-4 box-col-33" key={item.id}>
              <Card className="custom-card">
                <CardHeader >
                  <Image attrImage={{ src: `${dynamicImage(item.card_bg)}`, className: 'img-fluid', alt: '' }} />
                </CardHeader>
                <div className="card-profile">
                  <Image attrImage={{ src: `${dynamicImage(item.avatar)}`, className: 'rounded-circle', alt: '' }} />
                </div>
                <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                  <div className="text-center profile-details">
                    <H4>{item.name}</H4>
                    <H6>{item.post}</H6>
                  </div>
                </Link>
                <UL attrUL={{ as: 'ul', className: 'simple-list card-social flex-row' }}>
                  <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></LI>
                  <LI><a href="https://www.google.com/"><i className="fa fa-google-plus"></i></a></LI>
                  <LI><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></LI>
                  <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></LI>
                  <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></LI>
                </UL>
                <CardFooter className="row">
                  <Col sm="4" xs='4'>
                    <H6>Follower</H6>
                    <H3 attrH3={{ className: 'counter' }}>{item.follower}</H3>
                  </Col>
                  <Col sm="4" xs='4'>
                    <H6>Following</H6>
                    <H3><span className="counter">{item.following}</span>K</H3>
                  </Col>
                  <Col sm="4" xs='4'>
                    <H6>Total Post</H6>
                    <H3><span className="counter">{item.totalPost}</span>M</H3>
                  </Col>
                </CardFooter>
              </Card>
            </Col>
          );
        })
      }
    </Fragment>
  );
};
export default AllCards;
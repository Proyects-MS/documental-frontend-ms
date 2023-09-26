import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'reactstrap';
import { H4, H6, LI, P, UL, Image } from '../../AbstractElements';
import imgg from '../../assets/images/blog/blog.jpg';
import PagesSort from './Pages';
import { MarkJecno } from '../../Constant';

const AllTabs = () => {
  const [tabsData, setTabsData] = useState();
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/searchAllTabs.json`).then((resp) => {
      setTabsData(resp.data);
    });
  }, []);
  return (
    <Fragment>
      <div className="search-links tab-pane fade show active" id="all-links" role="tabpanel" aria-labelledby="all-link">
        <Row>
          <Col xl="6 box-col-6 search-banner">
            <P attrPara={{ className: 'pb-4' }}>About 6,000 results (0.60 seconds)</P>
            {tabsData && tabsData.map((item) => {
              return (
                <div className="info-block" key={item.id}>
                  <H6>{item.title}</H6>
                  <a href="#javascript">{item.url}</a>
                  <P>{item.detail}</P>
                  <div className="star-ratings">
                    <UL attrUL={{ className: 'simple-list search-info flex-row' }}>
                      <LI>
                        <UL attrUL={{ className: 'simple-list rating flex-row' }}>
                          <LI><i className="icofont icofont-ui-rating"></i></LI>
                          <LI><i className="icofont icofont-ui-rating"></i></LI>
                          <LI><i className="icofont icofont-ui-rating"></i></LI>
                          <LI><i className="icofont icofont-ui-rate-blank"></i></LI>
                          <LI><i className="icofont icofont-ui-rate-blank"></i></LI>
                        </UL>
                      </LI>
                      <LI>{item.star}</LI>
                      <LI>{item.vote}</LI>
                      <LI>{item.news}</LI>
                    </UL>
                  </div>
                </div>
              );
            })
            }
            <PagesSort />
          </Col>
          <Col xl="6 box-col-6 search-banner" >
            <Card className="mb-0">
              <div className="blog-box blog-shadow"><Image attrImage={{ className: 'img-fluid bg-img-cover', src: `${imgg}`, alt: '' }} />
                <div className="blog-details">
                  <P attrPara={{ className: 'digits' }}>25 July 2022</P>
                  <H4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</H4>
                  <UL attrUL={{ className: 'simple-list blog-social digits flex-row' }}>
                    <LI><i className="icofont icofont-user"></i>{MarkJecno}</LI>
                    <LI><i className="icofont icofont-thumbs-up"></i>02 Hits</LI>
                  </UL>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default AllTabs;
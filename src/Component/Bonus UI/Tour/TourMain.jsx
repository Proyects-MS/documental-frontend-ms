import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTour } from '@reactour/tour';
import LeftbarProfile from './Leftbar';
import PostFirst from './PostFirst';
import PostSecond from './PostSecond';
import PostThird from './PostThird';
import UserProfile from './UserProfile';

const TourMain = () => {
    const { setIsOpen } = useTour();
    useEffect(() => {
        var timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <Container fluid={true}>
            <div className='user-profile tour'>
                <Row>
                    {/* <!-- user profile header start--> */}
                    <UserProfile />
                    {/* <!-- user profile header end--> */}
                    <LeftbarProfile />
                    <Col xl='9' lg='12' md='7' className='xl-70'>
                        <Row>
                            {/* <!-- profile post start--> */}
                            <PostFirst />
                            {/* <!-- profile post end-->
                <!-- profile post start--> */}
                            <PostSecond />
                            {/* <!-- profile post end   -->
                <!-- profile post start--> */}
                            <PostThird />
                            {/* <!-- profile post end --> */}
                        </Row>
                    </Col>
                    {/* <!-- user profile fifth-style end--> */}
                    {/* <UserProfileStyle /> */}
                </Row>
            </div>
        </Container>
    );
};
export default TourMain;
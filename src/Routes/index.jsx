import React, { Fragment, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { firebase_app, auth0 } from '../Config/Config';
import { configureFakeBackend, authHeader, handleResponse, } from '../Services/Fack.Backend';
import Loader from '../Layout/Loader';
import LayoutRoutes from './LayoutRoutes';
import Callback from '../Auth/Callback';
import { authRoutes } from './AuthRoutes';
import PrivateRoute from './PrivateRoute';
import Signin from '../Auth/Signin';

configureFakeBackend();
const Routers = () => {
  return (
    <Fragment>
      <BrowserRouter basename={'/'}>
          <>
            <Routes>
                <Route path={'/'} element={<PrivateRoute />}>
                  <Route path={`/*`} element={<LayoutRoutes />} />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
                {authRoutes.map(({ path, Component }, i) => (
                  <Route path={path} element={Component} key={i} />
                ))}
            </Routes>
          </>
      </BrowserRouter>
    </Fragment >
  );
};
export default Routers;
import Layout from "../src/components/_layouts/Layout";
import React, { useState} from "react";
import Router from "next/router";
// import * as loginUser from "../lib/loginUser";
import { useSetRecoilState } from "recoil";
import { loginUserState } from "../src/states/loginUser";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {Main} from "../src/components/login/Main";
// import AlertMessage from "../components/Alert";

const LoginPage = () => {
  const setLoginUser = useSetRecoilState(loginUserState);

  return (
      <>
        <Layout title="Login">
          <Main />
        </Layout>
      </>
  )
}

export default LoginPage;

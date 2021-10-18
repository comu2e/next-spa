import React, {useState} from "react";
import Layout from "../../src/components/_layouts/Layout";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import AlertMessage from "../../src/components/_partials/Alert";
import * as loginUser from "../../src/lib/loginUser";
import Router from "next/router";

const Users = ({ssrData}) => {
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const userdata = {
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/hr_admin/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include'
      });

      await Router.push('/manages/users');

    } catch (err) {
      console.error('An unexpected error happened occurred:', err);
    }
  }


  return (
      <>
        <Layout title={'user管理'} >

          <Card>
            <Card.Header>
              <h2 className="h5 text-center">基本情報の入力</h2>
            </Card.Header>
            <Card.Body className="bg-white">

              <Container className="mt-5">
                <Row className="justify-content-center">
                  <Col md={8}>
                    <h1 className="h1 mb-4 text-center font-weight-bold">基本情報の入力</h1>
                    {hasError ? (
                        <AlertMessage variant="danger" message="メールアドレスかパスワードが違います" />
                    ): null}
                        <Form onSubmit={handleSubmit}>

                          <Form.Group className="row">
                            <Form.Label htmlFor="password" className="col-md-4 mb-3  col-form-label text-md-right">名前</Form.Label>
                            <Col md={6}>
                              <input id="password" type="password" className="form-control" name="password" />
                            </Col>
                          </Form.Group>
                          <Form.Group className="row">
                            <Form.Label htmlFor="email" className="col-md-4 mb-3 col-form-label text-md-right">Email</Form.Label>
                            <Col md={6}>
                              <input id="email" type="email" className="form-control" name="email" />
                            </Col>
                          </Form.Group>
                          <Form.Group className="row">
                            <Form.Label htmlFor="password" className="col-md-4 mb-3  col-form-label text-md-right">Password</Form.Label>
                            <Col md={6}>
                              <input id="password" type="password" className="form-control" name="password" />
                            </Col>
                          </Form.Group>
                          <Form.Group className="row mb-0">
                            <Col className="text-center">
                              <Button variant="primary" type="submit" className="text-center px-4">保存</Button>
                            </Col>
                          </Form.Group>

                        </Form>
                  </Col>
                </Row>
              </Container>

              {/*<table className="table table-form">*/}
              {/*  <tbody>*/}
              {/*  <tr>*/}
              {/*    <th>お名前</th>*/}
              {/*    <td>*/}
              {/*      <input id="name" type="text" className="form-control" name="name" />*/}
              {/*    </td>*/}
              {/*  </tr>*/}
              {/*  <tr>*/}
              {/*    <th>メールアドレス</th>*/}
              {/*    <td>*/}
              {/*      <input id="email" type="email" className="form-control" name="email" />*/}
              {/*    </td>*/}
              {/*  </tr>*/}
                {/*<tr>*/}
                {/*  <th>password</th>*/}
                {/*  <td>*/}
                {/*    <input id="email" type="email" className="form-control" name="email" />*/}
                {/*  </td>*/}
                {/*</tr>*/}

                {/*</tbody>*/}
              {/*</table>*/}

            </Card.Body>
          </Card>
        </Layout>
      </>
  )
}

export default Users
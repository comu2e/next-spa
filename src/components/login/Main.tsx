import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import Router from "next/router";

export const Main = () => {

  // 状態管理
  const [hasError, setHasError] = useState(false);

  /**
   * @param e
   * @returns {Promise<void>}
   */
  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include'
      });

      if (res.status === 200) {

        // リダイレクト前に認証情報をセットしないとチェックができないため
        try {
          const user = await loginUser.fetchLoginUser();
          setLoginUser(user);
        } catch {
          setLoginUser(null);
        }

        await Router.push('/');
      } else {

        //
        if(res.status === 422) {
          setHasError(true);
        }

        throw new Error(await res.text());
      }
    } catch (err) {
      console.error('An unexpected error happened occurred:', err);
    }
  }

  return (
      <div id="login-form">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="h1 mb-4 text-center font-weight-bold">認証</h1>
              {hasError ? (
                  <AlertMessage variant="danger" message="メールアドレスかパスワードが違います" />
              ): null}
              <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="row">
                      <Form.Label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email</Form.Label>
                      <Col md={6}>
                        <input id="email" type="email" className="form-control" name="email" />
                      </Col>
                    </Form.Group>
                    <Form.Group className="row">
                      <Form.Label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</Form.Label>
                      <Col md={6}>
                        <input id="password" type="password" className="form-control" name="password" />
                      </Col>
                    </Form.Group>
                    <Form.Group className="row mb-0">
                      <Col className="text-center">
                        <Button variant="primary" type="submit" className="text-center px-4">Login</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
import React, {useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Router from "next/router";
import UserForm from "../../src/components/manages/UserForm";

const Users = ({ssrData}) => {

  return (
      <>
        {/*<Layout title={'user管理'} >*/}
          <Container >
            <UserForm />
          </Container>

        {/*</Layout>*/}
      </>
  )
}

export default Users

// <Form.Group className="row">
//     <Form.Label htmlFor="password" className="col-md-4 mb-3  col-form-label text-md-right">姓</Form.Label>
// <Col md={6}>
//   <input id="password" type="password" className="form-control" name="password" />
// </Col>
// </Form.Group>
//
// <Form.Group className="row">
//   <Form.Label htmlFor="password" className="col-md-4 mb-3  col-form-label text-md-right">名</Form.Label>
//   <Col md={6}>
//     <input id="password" type="password" className="form-control" name="password" />
//   </Col>
// </Form.Group>
//
// <Form.Group className="row">
//   <Form.Label htmlFor="password" className="col-md-4 mb-3  col-form-label text-md-right">名前</Form.Label>
//   <Col md={6}>
//     <input id="password" type="password" className="form-control" name="password" />
//   </Col>
// </Form.Group>
//
// <Form.Group className="row">
//   <Form.Label htmlFor="password" className="col-md-4 mb-3  col-form-label text-md-right">Password</Form.Label>
//   <Col md={6}>
//     <input id="password" type="password" className="form-control" name="password" />
//   </Col>
// </Form.Group>
// <Form.Group className="row mb-0">
//   <Col className="text-center">
//     <Button variant="primary" type="submit" className="text-center px-4">保存</Button>
//   </Col>
// </Form.Group>
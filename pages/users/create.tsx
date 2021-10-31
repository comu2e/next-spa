import React from "react";
import Layout from "../../src/components/_layouts/Layout";
import {Card, Button} from "react-bootstrap";
import UserForm from "../../src/components/user/UserForm";

const create = ({}) => {

  return (
      <>
        <Layout title={'user管理'} >

          <Card>
            <Card.Header>基本情報</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>

                <UserForm />

                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </Layout>
      </>
  )
}

export default create
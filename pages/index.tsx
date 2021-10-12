import React from "react";
import {Button, Card} from "react-bootstrap";
import Layout from "../src/components/_layouts/Layout";
import {useRequireLogin} from "../src/hooks/useRequireLogin";


const Home = () => {
  useRequireLogin();
  
    return (
        <>
          <Layout>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card>
          </Layout>
        </>
    )
}

export default Home
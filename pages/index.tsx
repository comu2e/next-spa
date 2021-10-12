import React from "react";
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import Layout from "../src/components/_layouts/Layout";
import {useRequireLogin} from "../src/hooks/useRequireLogin";


const Home = () => {
  useRequireLogin();
  
    return (
        <>
          <Layout>
              <Card>
                <Card.Header>
                  <Nav fill variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first">労務 Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">勤怠 Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">経費申請 Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#disabled" disabled>
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>

                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>

                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>

                  <Row className="mb-5">
                    <Col md={6}>
                      <Card bg="light">
                        入社手続き
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card bg="light">
                        退職手続き
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mb-5">
                    <Col md={6}>
                      <Card bg="light" className="p-0 h-100">
                        扶養追加
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card bg="light">
                        住所変更
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mb-5">
                    <Col md={6}>
                      <Card bg="light">
                        氏名変更
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card bg="light">
                        年末調整
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mb-5">
                    <Col md={6}>
                      <Card bg="light">
                        Web 給料明細
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card bg="light">
                        あああああああ
                      </Card>
                    </Col>
                  </Row>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Layout>
        </>
    )
}

export default Home
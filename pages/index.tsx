import React from "react";
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import Layout from "../src/components/_layouts/Layout";
import {useRequireLogin} from "../src/hooks/useRequireLogin";
import Work from "../src/components/top/partials/Work";
import Manage from "../src/components/top/partials/Manage";
import Sample from "../src/components/top/partials/Sample";
import Tab from "../src/components/top/Tab";


const Home = () => {
  useRequireLogin();
  
    return (
        <>
          <Layout>

            <div>
              <Col md="10" className="border">
                  <Tab
                  title={['sample1', 'sample2', 'sample3']}
                  content={[
                      <Work title="sample1"/>,
                      <Manage title="sample2" />,
                      <Sample title="sample3" />,
                  ]}
                  >

                  </Tab>

              </Col>

            </div>

              {/*<Card>*/}
              {/*  <Card.Header>*/}
              {/*    <Nav fill variant="tabs" defaultActiveKey="#first">*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab1">労務 Active</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab2">勤怠 Link</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab3">経費申請 Link</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#tab4">管理者</Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*      <Nav.Item>*/}
              {/*        <Nav.Link role="presentation" href="#disabled" disabled>*/}
              {/*          Disabled*/}
              {/*        </Nav.Link>*/}
              {/*      </Nav.Item>*/}
              {/*    </Nav>*/}
              {/*  </Card.Header>*/}
              {/*  <Card.Body>*/}

              {/*    <Card.Title>Special title treatment</Card.Title>*/}
              {/*    <Card.Text>*/}

              {/*      With supporting text below as a natural lead-in to additional content.*/}
              {/*    </Card.Text>*/}

              {/*    <div className="tab-content">*/}
              {/*      <div role="tabpanel" id="tab1">*/}
              {/*        <Row className="mb-5">*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              入社手続き*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              退職手続き*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*        </Row>*/}

              {/*        <Row className="mb-5">*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light" className="p-0 h-100">*/}
              {/*              扶養追加*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              住所変更*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*        </Row>*/}

              {/*        <Row className="mb-5">*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              氏名変更*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              年末調整*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*        </Row>*/}

              {/*        <Row className="mb-5">*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              Web 給料明細*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*          <Col md={6}>*/}
              {/*            <Card bg="light">*/}
              {/*              あああああああ*/}
              {/*            </Card>*/}
              {/*          </Col>*/}
              {/*        </Row>*/}

              {/*        <Button variant="primary">Go somewhere</Button>*/}
              {/*      </div>*/}

              {/*      <div role="tabpanel" id="tab2">*/}
              {/*        sample*/}
              {/*      </div>*/}

              {/*      <div role="tabpanel" id="tab3">*/}
              {/*        3*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </Card.Body>*/}
              {/*</Card>*/}
          </Layout>
        </>
    )
}

export default Home
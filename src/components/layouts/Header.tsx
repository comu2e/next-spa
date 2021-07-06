import Link from  "next/link";
import React from "react";
import { Row, Col, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {

    return (
        <>
            <header className="py-1">
                <Row>
                    <Col md={"auto"} className="mr-auto d-flex align-items-center">
                        <p className="site-title h5 m-0 pl-3">hogehoge</p>
                    </Col>
                    <Col md={"auto"}>
                        <nav>
                            <Nav>
                                <Nav.Item>
                                    <div className="nav-item nav-link">
                                        <Link href="/">トップ</Link>
                                    </div>
                                </Nav.Item>
                            </Nav>
                        </nav>
                    </Col>
                </Row>
            </header>
        </>
    )
}

export default Header
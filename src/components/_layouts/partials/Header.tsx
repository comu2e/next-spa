import Link from  "next/link";
import React from "react";
import { Row, Col, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {

    return (
        <>
            <header className="py-1">
                <Row>
                    <Col md={"auto"} className="mr-auto d-flex align-items-center">
                        <p className="site-title h5 m-0 pl-3"> 会社名 </p>
                    </Col>
                    <Col md={"auto"}>
                        <nav>
                            <Nav>
                                <Nav.Item>
                                    <div className="nav-item nav-link">
                                        <Link href="/">トップ</Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="nav-item nav-link">
                                        <Link href="/">労務管理</Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="nav-item nav-link">
                                        <Link href="/">勤怠管理</Link>
                                    </div>
                                </Nav.Item>
                                {/*{loginUser ?*/}
                                {/*    <NavDropdown title={loginUser.name} id="nav-dropdown">*/}
                                {/*        <NavDropdown.Item><span onClick={handleLogout}>Logout</span></NavDropdown.Item>*/}
                                {/*    </NavDropdown>*/}
                                {/*    :*/}
                                {/*    <Nav.Item>*/}
                                {/*        <div className="nav-item nav-link">*/}
                                {/*            <Link href="/login">Login</Link>*/}
                                {/*        </div>*/}
                                {/*    </Nav.Item>*/}
                                {/*}*/}
                            </Nav>
                        </nav>
                    </Col>
                </Row>
            </header>
        </>
    )
}

export default Header


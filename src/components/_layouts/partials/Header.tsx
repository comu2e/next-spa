import React from "react";
import { Row, Col, Nav, NavDropdown} from "react-bootstrap";
import Link from "next/link";

const Header = () => {

    return (
        <>
            <header className="py-1">
                <Row>
                    <Col md={"auto"} className="mr-auto d-flex align-items-center">
                        <p className="site-title h5 m-0 pl-3">Sample HR</p>
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
                                        <Link href="/estates">物件検索</Link>
                                    </div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="nav-item nav-link">
                                        <Link href="/estates/map">地図検索</Link>
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


import React from "react";
import { Row, Col, Nav, NavDropdown, Navbar} from "react-bootstrap";
import Link from "next/link";
import {useLoginUser} from "../../../hooks/useLoginUser";

const Header = () => {
    const { loginUser } = useLoginUser()

    /**
     * @returns {Promise<void>}
     */
    async function handleLogout() {
        const res = await fetch('/api/hm_admin/auth/logout')

        if (res.status === 200) {
            await Router.push('/login')
        } else {
            throw new Error(await res.text())
        }
    }

    return (
        <>
            <header className="py-1">
                <Row>
                    <Col md={"auto"} className="mr-auto d-flex align-items-center">
                        <p className="site-title h5 m-0 pl-3">Sample HR</p>
                    </Col>
                    <Col md={"auto"}>
                        <nav>
                            <Nav className="me-auto">
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
                                        <Link href="/">ユーザー管理</Link>
                                    </div>
                                </Nav.Item>


                                    {loginUser ?
                                        <NavDropdown title={loginUser.name} id="nav-dropdown">
                                            <NavDropdown.Item><span onClick={handleLogout}>Logout</span></NavDropdown.Item>
                                        </NavDropdown>
                                        :
                                        <Nav.Item>
                                            <div className="nav-item nav-link">
                                                <Link href="/login">Login</Link>
                                            </div>
                                        </Nav.Item>
                                    }
                            </Nav>
                        </nav>
                    </Col>
                </Row>
            </header>
        </>
    )
}

export default Header


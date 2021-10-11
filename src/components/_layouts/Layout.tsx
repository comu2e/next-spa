import {useEffect, useState} from "react";
import Head from "next/head";
import Router from "next/router";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import {Container} from "react-bootstrap";
import Sidebar from "../_partials/Sidebar";

const Layout = ({ children, title = 'title' }) => {

  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isMapPage, setIsMapPage] = useState(false);

  useEffect( () => {
    setIsLoginPage(Router.pathname === '/login');
    setIsMapPage(Router.pathname === '/estates/map');
  }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="robots" content="noindex" />
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                {/*<link rel="icon" type="image/x-icon" href={process.env.NEXT_PUBLIC_HB_URL +'//hogehoge'} />*/}
            </Head>

          <Header/>
          {/* Main の背景色*/}
          <div className="flex bg-gray-100 min-h-screen w-screen">

            { !isLoginPage &&
                <Sidebar />
            }

          <Container>
            {children}
          </Container>

          </div>

          { !isLoginPage &
          <Footer/>
          }

        </>
    )
}

export default Layout;
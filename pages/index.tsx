import React from "react";
import {Button} from "react-bootstrap";
import Layout from "../src/components/_layouts/Layout";
import {useRequireLogin} from "../src/hooks/useRequireLogin";

const Home = () => {
  useRequireLogin();
  
    return (
        <>
          <Layout>
            <div>
              <Button variant={"primary"}>ああ</Button>
            </div>
          </Layout>
        </>
    )
}

export default Home
import {FC, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import Sample from "./partials/Sample";


const TopTab:FC<prop> = ({title, content}) => {

  const [key, setKey] = useState('home');

  return (
      <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Sample />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          aaaaaaa
        </Tab>
        <Tab eventKey="contact" title="Contact">
          aaaaaaa
        </Tab>
      </Tabs>
  );

}

export default TopTab
import React from "react";
import {Button, Menu,Container } from "semantic-ui-react";
import Language from "./Language";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
          <Language />
            <Menu.Item>
            <Button alert>Sign Up</Button> 
            <Button alert> Login</Button> 
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

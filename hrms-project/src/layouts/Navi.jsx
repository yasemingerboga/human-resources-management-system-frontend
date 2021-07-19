import React from "react";
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import Signup from "./Signup";
export default function Navi() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary >
          <Container>
            <Menu.Item name="home" />
            <Menu.Item name="advertisements" />
            <Menu.Item name="about" />
            <Menu.Menu position="right">
            <Button inverted>Sign up</Button>
            <Button inverted>Login</Button>
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    </div>
  );
}

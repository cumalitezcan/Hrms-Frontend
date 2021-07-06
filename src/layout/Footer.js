import React from "react";
import {
    Container,
    Image,
    List,
    Segment,
  } from 'semantic-ui-react';

function Footer() {
  return (

    <div className="footer">
    <Segment inverted style={{ margin: '33em 0em 0em', padding: '1em 0em' }} vertical>
      <Container textAlign='center'>
        <Image src='#' centered size='mini' />
        <List horizontal inverted divided link size='medium'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
        
    </div>

  );
}

export default Footer;

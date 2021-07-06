import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {Menu,Container } from "semantic-ui-react";
import Language from "./Language";
import  {useState} from "react";
import SignedIn from './SignedIn'; 
import SignedOut from './SignedOut';


 function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  let history = useHistory()

  function handleSignOut(){
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
          <Language />
            {isAuthenticated?<SignedIn signOut={handleSignOut} />
            :<SignedOut signIn={handleSignIn} /> }
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
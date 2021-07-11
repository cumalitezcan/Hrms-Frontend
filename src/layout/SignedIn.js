import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

function SignedIn({ signOut }) {
  return (
    <div className="signedIn" style={{ display: "flex" }}>
      <Menu.Item
        as={NavLink}
        to="/addJobAdvert"
        name="Add Job Advert"
        style={{ flex: 2 }}
      />
      <Menu.Item style={{flex:1}}>
        <Image
          avatar
          spaced="right"
          src="https://tibatu.com/wp-content/uploads/2020/10/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        />
        <Dropdown pointing="top left" text="CT">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

export default SignedIn;

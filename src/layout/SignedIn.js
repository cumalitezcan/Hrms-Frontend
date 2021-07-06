import React from 'react'
import { Dropdown, Menu, Image, MenuItem } from 'semantic-ui-react'

function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
             <Image avatar spaced="right" src="https://tibatu.com/wp-content/uploads/2020/10/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" />
                <Dropdown pointing="top left" text="CT">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>        
        </div>
    )
}

export default SignedIn;
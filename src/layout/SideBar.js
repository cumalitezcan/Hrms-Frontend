import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

 function SideBar() {
    return (
        <div>
              <Menu inverted icon="labeled" vertical>
              <Menu.Item as={NavLink} to="/jobAdverts">
                <Icon name="bullhorn" />
                Job Adverts
              </Menu.Item>
             <Menu.Item as={NavLink} to="/candidates" >
                <Icon name="user" />
                Candidates
             </Menu.Item>
             <Menu.Item as={NavLink} to="/employers">
                <Icon name="user" />
                Employers
             </Menu.Item>
             <Menu.Item  as={NavLink} to="/employees">
                <Icon name="user" />
                 Employees
            </Menu.Item>
          </Menu>
        </div>
    )
}
export default SideBar

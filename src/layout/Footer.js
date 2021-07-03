import React from "react";
import { Grid, GridColumn, Icon } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <Grid columns={2} padded>
        <Grid.Row>
          <GridColumn floated="left" width={1}>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="https://github.com/cumalitezcan/Hrms-Frontend">
                  Frontend
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/cumalitezcan/HumanResourceManagementSystem">
                  Backend
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">Hakkımızda</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Destek</a>
              </li>
            </ul>
          </GridColumn>

          <GridColumn floated="left" width={1}>
            <ul class="list-inline">
              <li class="list-inline-item">
                <Icon name="linkedin " />
              </li>
              <li class="list-inline-item">
                <Icon name="github square" />
              </li>
              <li class="list-inline-item">
                <Icon name="twitter square" />
              </li>
              <li class="list-inline-item">
                <Icon name="facebook square" />
              </li>
            </ul>
          </GridColumn>
        </Grid.Row>

      </Grid>
    </div>
  );
}

export default Footer;

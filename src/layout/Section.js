import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import EmployeeList from '../pages/users/Employee';
import EmployerList from '../pages/users/Employer';
import JobAdvertList from '../pages/adverts/JobAdvertsList';
import CandidateList from '../pages/users/Candidate';


 function Section() {
    return (
        <div>
            <Grid>
              <Grid.Row>
                <GridColumn size={14}>
                  <EmployeeList />
                </GridColumn>
              </Grid.Row>
              <Grid.Row>
                <GridColumn size={14}>
                  <EmployerList />
                </GridColumn>
              </Grid.Row>
              <Grid.Row>
                <GridColumn size={14}>
                  <CandidateList />
                </GridColumn>
              </Grid.Row>
              <Grid.Row>
                <GridColumn size={14}>
                  <JobAdvertList />
                </GridColumn>
              </Grid.Row>
            </Grid>
        </div>
    )
}
export default Section;

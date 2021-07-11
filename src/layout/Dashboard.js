import React from 'react'
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import CandidateList from '../pages/users/Candidate';
import JobAdvertsList from '../pages/adverts/JobAdvertsList';
import EmployeeList from '../pages/users/Employee';
import EmployerList from '../pages/users/Employer';
import { Route } from "react-router";
import JobAdvertForm from '../pages/formik/JobAdvertForm';
import CandidateCv from '../pages/users/CandidateCV';


function Dashboard() {
    return (
        <div>
              <Grid>
                 <Grid.Row>
                     <Grid.Column width={2}>
                           <SideBar/>
                         </Grid.Column>
                         <Grid.Column width={14}>
                         <Route exact path="/"/>
                            <Route exact path="/employers" component={EmployerList} />
                            <Route exact path="/employees" component={EmployeeList} />
                            <Route exact path="/candidates" component={CandidateList} />
                            <Route exact path="/candidateCV" component={CandidateCv} />
                            <Route exact path="/addJobAdvert" component={JobAdvertForm} />
                            <Route exact path="/JobAdverts" component={JobAdvertsList} />
                         </Grid.Column>
                 </Grid.Row>
             </Grid>
        </div>
    )
}

export default Dashboard

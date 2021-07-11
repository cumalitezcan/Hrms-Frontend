import React from "react";
import { useState, useEffect } from "react";
import { Grid, Segment, Image, Header, Icon } from "semantic-ui-react";
import CandidateService from "../../services/candidateService";

function CandidateCv() {
  const [cv, setCv] = useState();

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getByCV(15).then((result) => setCv(result.data.data));
  }, []);

  return (
    <div>
      <Segment>
        <Grid celled columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
            <h1>1</h1>
            </Grid.Column>
             
            <Grid.Column width={10}>
            <h1>2</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default CandidateCv;

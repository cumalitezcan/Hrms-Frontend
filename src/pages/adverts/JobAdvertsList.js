import React from "react";
import { useState, useEffect } from "react";
import { Header,Button, Table, Icon } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

function JobAdvertsList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="hourglass three" />
        <Header.Content>Job Advert List</Header.Content>
      </Header>
      <Table color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer Name</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

       
      </Table>
    </div>
  );
}

export default JobAdvertsList;

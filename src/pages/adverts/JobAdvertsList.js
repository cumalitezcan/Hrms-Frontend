import React from "react";
import { useState, useEffect } from "react";
import { Header,Button, Table, Icon,Menu } from "semantic-ui-react";
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

        <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
      </Table>
    </div>
  );
}

export default JobAdvertsList;

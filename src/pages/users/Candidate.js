import React from "react";
import { Header, Image, Table, Button,Icon,Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import {  NavLink } from 'react-router-dom';
import CandidateService from "../../services/candidateService";

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Candidate List</Header.Content>
      </Header>
      <Table color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Candidate</Table.HeaderCell>
            <Table.HeaderCell> Mail</Table.HeaderCell>
            <Table.HeaderCell> Phone Number</Table.HeaderCell>
            <Table.HeaderCell> Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
            <Table.Cell>
                <Header as="h4" image>
                  <Image src={candidate.url} rounded size="large"></Image>
                  <Header.Content>{candidate.firstName} {candidate.lastName}</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.phoneNumber}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to="/candidateCV">View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
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

export default CandidateList;

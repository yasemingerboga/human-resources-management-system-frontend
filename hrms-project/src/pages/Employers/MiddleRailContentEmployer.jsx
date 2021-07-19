import React, { useEffect, useState } from 'react'
import { Container, List } from 'semantic-ui-react'
import EmployerService from '../../services/employerService';

export default function MiddleRailContentEmployer() {
    const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAll()
      .then((result) => setEmployers(result.data.data));
  });
    return (
        <div>
            <List animated divided relaxed verticalAlign="middle">
        {employers.map((employer) => (
          <List.Item key={employer.id}>
            <Container>
            {/* <List.Icon name="github" size="large" verticalAlign="middle" /> */}
            <List.Content>
              <List.Header as="a">{employer.companyName}</List.Header>
              <List.Description as="a">Web address: {employer.webAddres}</List.Description>
              <List.Description as="a">Phone Number: {employer.phoneNumber}</List.Description>
            </List.Content>
            </Container>
          </List.Item>
        ))}
      </List>
        </div>
    )
}

import React, { useEffect, useState } from "react";
import { Container, List } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function MiddleRailContent() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setJobAdvertisements(result.data.data));
  });
  return (
    <div>
      <List animated divided relaxed verticalAlign="middle">
        {jobAdvertisements.map((jobAdvertisement) => (
          <List.Item key={jobAdvertisement.id}>
            <Container>
            {/* <List.Icon name="github" size="large" verticalAlign="middle" /> */}
            <List.Content>
              <List.Header as="a">{jobAdvertisement.jobPosition.jobTitle}</List.Header>
              <List.Description as="a">{jobAdvertisement.jobDescription}</List.Description>
              <List.Description as="a">Open position count:{jobAdvertisement.openPositionCount}</List.Description>
              <List.Description as="a">Min Salary:{jobAdvertisement.minSalary} Max salary:{jobAdvertisement.maxSalary}</List.Description>
              {/* <List.Description as="a">Publish Date: {jobAdvertisement.publishDate} until {jobAdvertisement.lastApplyDate}</List.Description> */}
            </List.Content>
            </Container>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

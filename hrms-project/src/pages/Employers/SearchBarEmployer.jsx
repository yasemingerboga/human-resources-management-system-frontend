import React from "react";
import { Button, Grid, Header, Icon, Search } from "semantic-ui-react";

export default function SearchBarEmployer() {
  return (
    <div>
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Header as="h2">
              <Icon name="search" />
              <Header.Content>Find Employer</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Search
              fluid
              input={{ icon: "search", iconPosition: "left", fluid: true }}
            />
          </Grid.Column>
          <Grid.Column >
          <Button>Search</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

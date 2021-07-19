import React from "react";
import { Container, Grid, Rail, Segment } from "semantic-ui-react";
import LeftRailContent from "./LeftRailContent";
import MiddleRailContent from "./MiddleRailContent";
import RightRailContent from "./RightRailContent";
import SearchBar from "./SearchBar";

export default function JobAdvertisementList() {
  return (
    <div>
      <SearchBar />
      <Container className="main">
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment>
              <MiddleRailContent />

              <Rail position="left">
                <Segment>
                  <LeftRailContent />
                </Segment>
              </Rail>

              <Rail position="right">
                <Segment>
                  <RightRailContent />
                </Segment>
              </Rail>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
import MiddleRailContentEmployer from './MiddleRailContentEmployer'
import SearchBarEmployer from './SearchBarEmployer'

export default function EmployerList() {
    return (
        <div>
      <SearchBarEmployer />
      <Container className="main">
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment>
              <MiddleRailContentEmployer />

              {/* <Rail position="left">
                <Segment>
                  <LeftRailContent />
                </Segment>
              </Rail>

              <Rail position="right">
                <Segment>
                  <RightRailContent />
                </Segment>
              </Rail> */}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
    )
}

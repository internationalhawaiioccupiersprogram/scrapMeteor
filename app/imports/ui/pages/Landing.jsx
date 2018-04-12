import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='back-image'>

          {/** capitalize GRID!!!! */}
          <Grid container stackable centered columns={3}>

            <Grid.Column textAlign='center'>
              <Icon size='huge' inverted name='address card'/>
              <Header as='h1'>List of Vendors</Header>
              <Header as='h3'>Browse the list of Food Vendors and their locations available at UH Manoa</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' inverted name='coffee'/>
              <Header as='h1'>Vendor Page</Header>
              <Header as='h3'>For each vendor, you can view their menu, location, and bussiness hours.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' inverted name='checked calendar'/>
              <Header as='h1'>Browse Food Categories</Header>
              <Header as='h3'>Craving Sushi, Pho, Pizza, or want to try something new? Search by food
                categories.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;

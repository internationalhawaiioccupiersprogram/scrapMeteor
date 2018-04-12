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
              <Icon size='huge' name='address card'/>
              <Header as='h1'>List of Vendors</Header>
              <Header as='h3'>Browse the list of Food Vendors and their locations available at UH Manoa</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='file text outline'/>
              <Header as='h1'>Contact Details</Header>
              <Header as='h3'>For each contact, you can save their name, address, and phone number.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='checked calendar'/>
              <Header as='h1'>Timestamped Notes</Header>
              <Header as='h3'>Each time you make a contact with a contact, you can write a note that summarizes
                the
                conversation.
                This note is saved along with a time stamp with the contact.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;

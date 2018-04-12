import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Contacts } from '/imports/api/contact/contact';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ContactVendor from '/imports/ui/components/ContactVendor';

/** Renders a table containing all of the contact documents. Use <contactItem> to render each row. */
class ListContactsVendor extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Contacts</Header>
          <Card.Group>
            {this.props.contacts.map((contact, index) => <ContactVendor key={index} contact={contact}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of contact documents in the props. */
ListContactsVendor.propTypes = {
  contacts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ContactsVendor');
  return {
    contacts: Contacts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListContactsVendor);

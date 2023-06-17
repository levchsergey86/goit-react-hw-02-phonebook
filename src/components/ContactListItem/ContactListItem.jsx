import React from 'react';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    // <li>
    //   {contact.name} - {contact.number}{' '}
    //   <button onClick={() => deleteContact(contact.id)}>Delete Contact</button>
    // </li>
    <li key={contact.id}>
      {contact.name} - {contact.number}{' '}
      <button onClick={() => deleteContact(contact.id)}>Delete Contact</button>
    </li>
  );
};

export default ContactListItem;

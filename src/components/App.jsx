import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import styled from './App.module.css';

class App extends React.Component {
state = {
      contacts: [],
      filter: '',
    };


  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isContactExists = contacts.some(
      (contact) => contact.name === name || contact.number === number
    );

    if (isContactExists) {
      alert('Contact with the same name or number already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
  
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div className={styled.container}>
        <h1>PHONE BOOK</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts:</h2>
        <FilterContacts handleFilterChange={this.handleFilterChange} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;


// import React, { useState } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import FilterContacts from './FilterContacts/FilterContacts';
// import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import styled from './App.module.css';

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const deleteContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

//   const addContact = (name, number) => {
//     const isContactExists = contacts.some(
//       contact => contact.name === name || contact.number === number
//     );

//     if (isContactExists) {
//       alert('Contact with the same name or number already exists.');
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };

//     setContacts(prevContacts => [...prevContacts, newContact]);
//   };

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={styled.container}>
//       <h1>PHONE BOOK</h1>
//       <ContactForm addContact={addContact} />
//       <h2>Contacts:</h2>
//       <FilterContacts handleFilterChange={handleFilterChange} />
//       <ContactList
//         filteredContacts={filteredContacts}
//         deleteContact={deleteContact}
//       />
//     </div>
//   );
// };

// export default App;

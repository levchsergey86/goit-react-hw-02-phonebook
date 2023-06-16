import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const filterContacts = event => {
    setFilter(event.target.value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const addContact = (name, number) => {
    const isContactExists = contacts.some(
      contact => contact.name === name || contact.number === number
    );

    if (isContactExists) {
      alert('Контакт с таким именем или номером уже существует.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>ТЕЛЕФОННАЯ КНИГА</h1>
      <ContactForm addContact={addContact} />
      <h3>Контакты:</h3>
      <h4>Найти контакт</h4>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может содержать только буквы, апострофы, тире и пробелы."
        required
        value={filter}
        onChange={filterContacts}
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}{' '}
            <button onClick={() => deleteContact(contact.id)}>
              Удалить контакт
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

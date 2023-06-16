import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Имя</h2>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может содержать только буквы, апострофы, тире и пробелы."
        required
        value={name}
        onChange={handleChange}
      />

      <h2>Номер</h2>
      <input
        type="text"
        name="number"
        pattern="^[\d-]*$"
        title="Номер может содержать только цифры и символы."
        required
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Добавить контакт</button>
    </form>
  );
};

export default ContactForm;

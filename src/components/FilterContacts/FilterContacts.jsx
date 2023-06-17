import React from 'react';

const FilterContacts = ({ handleFilterChange }) => {
  return (
    <div>
      <h4>Find contact</h4>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterContacts;

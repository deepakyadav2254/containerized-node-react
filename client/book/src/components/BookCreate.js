import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [term, setTerm] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onCreate(term);
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={term} onChange={handleOnChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;

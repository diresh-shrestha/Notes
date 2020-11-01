import React, { useState } from 'react';

const CreateArea = ({ add }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    add(note);

    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;

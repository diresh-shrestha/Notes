import React from 'react';

const Note = ({ title, content, id, remove }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default Note;

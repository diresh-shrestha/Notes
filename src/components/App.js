import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {
  const [note, setNote] = useState([]);
  const checked = true;
  const [isEditable, setEditable] = useState(false);

  const addNote = (note) => {
    if (note.title === '' && note.content === '') return note;
    if (note.title === '') {
      setNote((prevNote) => {
        return [...prevNote, { title: 'Untitled', content: note.content }];
      });
    } else if (note.content === '') {
      setNote((prevNote) => {
        return [...prevNote, { title: note.title, content: '' }];
      });
    } else {
      setNote((prevNote) => {
        return [...prevNote, note];
      });
    }
  };

  const deleteNote = (id) => {
    setNote((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  };

  /*   const editNote = (id) => {
    setNote((prevNote) => {
      const currNote = prevNote[id];
    });
  };
 */
  const notes = note.map((obj, id) => {
    return (
      <Note
        checked={checked}
        edit={() => {
          setEditable(true);
        }}
        remove={deleteNote}
        id={id}
        title={obj.title}
        content={obj.content}
      />
    );
  });

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />

      {notes}

      {/* {isEditable && <CreateArea />} */}

      <Footer />
    </div>
  );
};

export default App;
